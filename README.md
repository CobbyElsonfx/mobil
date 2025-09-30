# Simple Todo App - React Native with NativeWind

A clean, simple todo application built with React Native, Expo, and NativeWind. Perfect for teaching university students mobile app development with easy-to-copy components.

## 🎯 What This App Does

- ✅ **Add todos** - Simple text input to add new tasks
- ✅ **Mark complete** - Tap checkbox to mark todos as done
- ✅ **Delete todos** - Remove todos you no longer need
- ✅ **View statistics** - See total, completed, and pending todos
- ✅ **Save data** - Todos are saved locally on your device

## 🛠️ Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **AsyncStorage** - Local data storage
- **StyleSheet** - Built-in React Native styling

## 📁 Simple Project Structure

```
mymobileapp/
├── app/
│   └── index.js              # App entry point
├── components/
│   ├── App.js               # Main app component
│   ├── Header.js            # App header
│   ├── AddTodo.js           # Add new todo form
│   ├── TodoList.js          # List of todos
│   ├── TodoItem.js          # Individual todo item
│   ├── Stats.js             # Statistics display
│   └── index.js             # Export all components
├── assets/                  # App icons and images
├── package.json             # Dependencies
└── README.md                # This file
```

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the app**
   ```bash
   npm start
   ```

3. **Run on device**
   ```bash
   # iOS
   npm run ios
   
   # Android  
   npm run android
   ```

## 📱 How to Use

1. **Add a todo**: Type in the text box and tap "Add"
2. **Complete a todo**: Tap the circle next to any todo
3. **Delete a todo**: Tap the red × button
4. **View stats**: See your progress at the top

## 🎓 Learning Components

### 1. Header Component (`components/Header.js`)
```jsx
// Simple header with title and subtitle
<View className="bg-blue-500 p-6 pt-12">
  <Text className="text-white text-2xl font-bold text-center">
    My Todo App
  </Text>
</View>
```

### 2. AddTodo Component (`components/AddTodo.js`)
```jsx
// Form to add new todos
<TextInput
  value={text}
  onChangeText={setText}
  placeholder="Enter your todo..."
  className="flex-1 bg-gray-50 p-3 rounded-lg"
/>
```

### 3. TodoItem Component (`components/TodoItem.js`)
```jsx
// Individual todo with checkbox and delete button
<TouchableOpacity onPress={() => onToggle(todo.id)}>
  <View className="w-6 h-6 rounded-full border-2">
    {todo.completed && <Text>✓</Text>}
  </View>
</TouchableOpacity>
```

### 4. TodoList Component (`components/TodoList.js`)
```jsx
// List of todos using FlatList
<FlatList
  data={todos}
  renderItem={({ item }) => <TodoItem todo={item} />}
/>
```

### 5. Stats Component (`components/Stats.js`)
```jsx
// Display statistics
<Text className="text-2xl font-bold text-blue-500">{total}</Text>
<Text className="text-sm text-gray-600">Total</Text>
```

## 🎨 Styling with StyleSheet

This app uses **React Native StyleSheet** for clean, organized styling:

```jsx
// Example styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B82F6', // Blue background
    padding: 16,                // 16px padding
    borderRadius: 8,            // Rounded corners
  },
  text: {
    color: 'white',             // White text
    fontSize: 18,               // Font size
    fontWeight: 'bold',         // Bold text
  },
});
```

### Color Palette Used:
- **Blue**: `#3B82F6` (Primary)
- **Green**: `#10B981` (Success)
- **Red**: `#DC2626` (Danger)
- **Gray**: `#6B7280` (Text)
- **Light Gray**: `#F3F4F6` (Background)

## 📚 What Students Learn

### React Native Basics
- **Components**: How to create reusable UI components
- **State**: Using `useState` to manage app data
- **Props**: Passing data between components
- **Lists**: Using `FlatList` to display data
- **Storage**: Saving data with `AsyncStorage`

### Styling
- **StyleSheet**: Using React Native's built-in styling system
- **Responsive Design**: Making apps look good on all screens
- **Color System**: Using consistent colors throughout the app

### App Structure
- **Component Organization**: How to organize code
- **Data Flow**: How data moves through the app
- **User Interactions**: Handling button presses and form input

## 🔧 Easy Customization

### Change Colors
```jsx
// In Header.js - change header color
backgroundColor: '#10B981'  // Green header instead of blue

// In AddTodo.js - change button color  
backgroundColor: '#8B5CF6'  // Purple button instead of blue
```

### Add New Features
1. **Add priority levels**: Modify `TodoItem.js` to show priority
2. **Add categories**: Update `AddTodo.js` with category selection
3. **Add due dates**: Include date picker in the form

### Copy Components
Each component is self-contained and can be copied to other projects:
- Copy `TodoItem.js` for any list item component
- Copy `AddTodo.js` for any form component
- Copy `Header.js` for any app header

## 📖 Component Templates

### Button Template
```jsx
<TouchableOpacity style={styles.button}>
  <Text style={styles.buttonText}>Button Text</Text>
</TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3B82F6',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
```

### Input Template
```jsx
<TextInput
  style={styles.input}
  placeholder="Enter text..."
/>

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
});
```

### Card Template
```jsx
<View style={styles.card}>
  {/* Card content */}
</View>

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
});
```

## 🎯 Perfect for Teaching

- **Simple**: Easy to understand and modify
- **Modular**: Each component can be copied independently
- **Well-commented**: Clear code with explanations
- **Modern**: Uses current React Native best practices
- **Visual**: Beautiful UI that students will be proud of

---

**Start building! 🚀**

This simple todo app is perfect for learning React Native basics while creating something useful and beautiful.
