// Decorator Metadata - New in ES2025
// ES2025 enhances JavaScript decorators by allowing them to associate metadata with decorated elements

// Decorators were introduced in ES2022 as a way to modify classes and class members
// Decorator Metadata extends this by providing a standard way to attach and retrieve metadata

// Note: This is experimental syntax and requires appropriate transpiler/compiler support

// 1. Basic Decorator Syntax (Review)
console.log("--- Basic Decorator Syntax ---");

// Class decorator
function logClass(target) {
  console.log(`Class decorated: ${target.name}`);
  return target;
}

// Method decorator
function logMethod(target, context) {
  const methodName = context.name;
  const originalMethod = target.value;
  
  // Replace the method with a new one that logs before and after execution
  target.value = function(...args) {
    console.log(`Entering method: ${methodName}`);
    const result = originalMethod.apply(this, args);
    console.log(`Exiting method: ${methodName}`);
    return result;
  };
  
  return target;
}

// 2. Decorator Metadata - Attaching Metadata
console.log("\n--- Decorator Metadata - Attaching Metadata ---");

// Define a decorator that attaches metadata
function addMetadata(metadataObj) {
  return function(target, context) {
    // Store metadata on the decorated element
    context.metadata = { ...context.metadata, ...metadataObj };
    return target;
  };
}

// 3. Accessing Decorator Metadata
console.log("\n--- Accessing Decorator Metadata ---");

// Define a decorator that reads metadata
function validateParams(target, context) {
  const originalMethod = target.value;
  const methodMetadata = context.metadata;
  
  target.value = function(...args) {
    // Check if we have validation metadata
    if (methodMetadata && methodMetadata.params) {
      const validations = methodMetadata.params;
      
      // Validate each parameter based on metadata
      for (let i = 0; i < validations.length; i++) {
        const validation = validations[i];
        const arg = args[i];
        
        if (validation.required && (arg === undefined || arg === null)) {
          throw new Error(`Parameter ${i} is required for ${context.name}`);
        }
        
        if (validation.type && typeof arg !== validation.type) {
          throw new Error(`Parameter ${i} must be of type ${validation.type} for ${context.name}`);
        }
        
        if (validation.min !== undefined && arg < validation.min) {
          throw new Error(`Parameter ${i} must be >= ${validation.min} for ${context.name}`);
        }
        
        if (validation.max !== undefined && arg > validation.max) {
          throw new Error(`Parameter ${i} must be <= ${validation.max} for ${context.name}`);
        }
      }
    }
    
    return originalMethod.apply(this, args);
  };
  
  return target;
}

// 4. Practical Example: API Documentation and Validation
console.log("\n--- Practical Example: API Documentation and Validation ---");

// Define decorators for API documentation and validation
function apiEndpoint(path, method = "GET") {
  return function(target, context) {
    context.metadata = { 
      ...context.metadata,
      api: { path, method }
    };
    return target;
  };
}

function params(validations) {
  return function(target, context) {
    context.metadata = { 
      ...context.metadata,
      params: validations
    };
    return target;
  };
}

function returns(description) {
  return function(target, context) {
    context.metadata = { 
      ...context.metadata,
      returns: description
    };
    return target;
  };
}

// 5. Complete Example with Metadata
console.log("\n--- Complete Example with Metadata ---");

@logClass
class UserService {
  constructor() {
    this.users = [
      { id: 1, name: "Alice", age: 30 },
      { id: 2, name: "Bob", age: 25 },
      { id: 3, name: "Charlie", age: 35 }
    ];
  }
  
  @logMethod
  @apiEndpoint("/users", "GET")
  @returns("Array of all users")
  getAllUsers() {
    return this.users;
  }
  
  @logMethod
  @apiEndpoint("/users/:id", "GET")
  @params([
    { name: "id", type: "number", required: true, description: "User ID" }
  ])
  @returns("User object or null if not found")
  getUserById(id) {
    return this.users.find(user => user.id === id) || null;
  }
  
  @logMethod
  @apiEndpoint("/users", "POST")
  @params([
    { name: "name", type: "string", required: true, description: "User name" },
    { name: "age", type: "number", required: true, min: 0, max: 120, description: "User age" }
  ])
  @returns("Created user object with assigned ID")
  @validateParams
  createUser(name, age) {
    const newId = Math.max(...this.users.map(user => user.id)) + 1;
    const newUser = { id: newId, name, age };
    this.users.push(newUser);
    return newUser;
  }
  
  @logMethod
  @apiEndpoint("/users/:id", "PUT")
  @params([
    { name: "id", type: "number", required: true, description: "User ID" },
    { name: "name", type: "string", required: false, description: "User name" },
    { name: "age", type: "number", required: false, min: 0, max: 120, description: "User age" }
  ])
  @returns("Updated user object or null if not found")
  @validateParams
  updateUser(id, name, age) {
    const user = this.users.find(user => user.id === id);
    if (!user) return null;
    
    if (name !== undefined) user.name = name;
    if (age !== undefined) user.age = age;
    
    return user;
  }
  
  @logMethod
  @apiEndpoint("/users/:id", "DELETE")
  @params([
    { name: "id", type: "number", required: true, description: "User ID" }
  ])
  @returns("Boolean indicating success")
  @validateParams
  deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;
    
    this.users.splice(index, 1);
    return true;
  }
}

// 6. Generate API Documentation from Metadata
console.log("\n--- Generate API Documentation from Metadata ---");

function generateApiDocs(serviceClass) {
  const docs = {
    service: serviceClass.name,
    endpoints: []
  };
  
  // Get all method names from the prototype
  const methodNames = Object.getOwnPropertyNames(serviceClass.prototype)
    .filter(name => name !== 'constructor');
  
  for (const methodName of methodNames) {
    const method = serviceClass.prototype[methodName];
    const metadata = method.context?.metadata;
    
    if (metadata && metadata.api) {
      docs.endpoints.push({
        path: metadata.api.path,
        method: metadata.api.method,
        function: methodName,
        parameters: metadata.params || [],
        returns: metadata.returns || "No return description"
      });
    }
  }
  
  return docs;
}

// Create an instance and test the service
const userService = new UserService();

// Test the methods
console.log("All users:", userService.getAllUsers());
console.log("User with ID 2:", userService.getUserById(2));
console.log("Create user:", userService.createUser("Dave", 40));
console.log("Update user:", userService.updateUser(1, "Alice Smith", 31));
console.log("Delete user:", userService.deleteUser(3));
console.log("All users after operations:", userService.getAllUsers());

// Generate API documentation
const apiDocs = generateApiDocs(UserService);
console.log("API Documentation:", JSON.stringify(apiDocs, null, 2));

// 7. Error Handling with Validation
console.log("\n--- Error Handling with Validation ---");

try {
  // This should throw an error because age is out of range
  userService.createUser("Invalid", 150);
} catch (error) {
  console.error("Validation error:", error.message);
}

try {
  // This should throw an error because name is required
  userService.createUser(null, 25);
} catch (error) {
  console.error("Validation error:", error.message);
}