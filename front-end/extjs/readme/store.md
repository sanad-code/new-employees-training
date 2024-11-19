In ExtJS, both `store: { type: 'mycustomstore' }` and `store: 'mycustomstore'` are ways to specify a store in components, but they differ in flexibility and usage. Here’s a breakdown of each approach:

### 1. **Using `store: { type: 'mycustomstore' }`**
   - This syntax is used when you want to create a **new store instance** with additional configurations.
   - By using `{ type: 'mycustomstore' }`, you can define extra properties or override defaults in the store configuration inline.
   - This approach provides more flexibility, as you can further customize this specific instance of the store.

   **Example**:
   ```javascript
   Ext.create('Ext.grid.Panel', {
       title: 'User Grid',
       store: {
           type: 'mycustomstore',   // Refers to the alias of the custom store
           autoLoad: true,          // Customizes this instance
           pageSize: 50             // Additional configuration for this instance
       },
       columns: [
           { text: 'ID', dataIndex: 'id' },
           { text: 'Name', dataIndex: 'name' },
           { text: 'Age', dataIndex: 'age' }
       ],
       renderTo: Ext.getBody()
   });
   ```

   **Use Case**: 
   - Use `{ type: 'mycustomstore' }` when you want to create a customized, unique instance of the store with additional configurations that don’t affect other instances.

### 2. **Using `store: 'mycustomstore'`**
   - This shorthand notation is used to reference a store by **alias only**.
   - ExtJS will look for an existing instance of `mycustomstore` if one exists in the `Ext.data.StoreManager`. If no instance exists, it will create a new instance with the default configuration.
   - This approach is simpler but less flexible because you cannot provide additional configurations inline.

   **Example**:
   ```javascript
   Ext.create('Ext.grid.Panel', {
       title: 'User Grid',
       store: 'mycustomstore', // Shorthand for referencing or creating an instance with default settings
       columns: [
           { text: 'ID', dataIndex: 'id' },
           { text: 'Name', dataIndex: 'name' },
           { text: 'Age', dataIndex: 'age' }
       ],
       renderTo: Ext.getBody()
   });
   ```

   **Use Case**:
   - Use `store: 'mycustomstore'` when you want to reference a store by alias without needing any special configurations or modifications for this particular instance.

### Summary of Differences
| Syntax                          | Description                                                                             | When to Use                                    |
|---------------------------------|-----------------------------------------------------------------------------------------|------------------------------------------------|
| `store: { type: 'mycustomstore' }` | Creates a new store instance with custom configurations specific to this instance.     | When you need to customize this store instance |
| `store: 'mycustomstore'`        | References an existing instance (if available) or creates a new one with default config. | When using default configurations or shared instance |

### Key Takeaway
- **Use `{ type: 'mycustomstore' }`** when you need flexibility and customization for the store in a specific context.
- **Use `'mycustomstore'`** for a straightforward reference or when you want the default configuration.