# Complete Todo App Build Guide

A comprehensive, step-by-step guide to build a beautiful React Native Todo App from scratch. Perfect for university students learning mobile app development.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Understanding the App Structure](#understanding-the-app-structure)
4. [Building the Components](#building-the-components)
5. [Adding State Management](#adding-state-management)
6. [Adding Data Persistence](#adding-data-persistence)
7. [Styling the App](#styling-the-app)
8. [Testing the App](#testing-the-app)
9. [Customization Ideas](#customization-ideas)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, make sure you have:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **Expo CLI** - Install with: `npm install -g @expo/cli`
- **Expo Go app** on your phone (iOS/Android)
- **Code editor** (VS Code recommended)
- **Basic knowledge** of JavaScript and React

---

## Project Setup

### Step 1: Create New Expo Project

```bash
# Create a new Expo project
npx create-expo-app TodoApp

# Navigate to the project directory
cd TodoApp

# Install additional dependencies
npm install @react-native-async-storage/async-storage
```

### Step 2: Project Structure

Create the following folder structure:

```
TodoApp/
├── app/
│   └── index.js
├── components/
│   ├── App.js
│   ├── Header.js
│   ├── AddTodo.js
│   ├── TodoList.js
│   ├── TodoItem.js
│   ├── Stats.js
│   └── index.js
├── assets/
├── package.json
└── README.md
```

---

## Understanding the App Structure

### App Components Overview

Our todo app will have 6 main components:

1. **App.js** - Main component that manages state
2. **Header.js** - App title and header
3. **AddTodo.js** - Form to add new todos
4. **TodoList.js** - Container for all todos
5. **TodoItem.js** - Individual todo item
6. **Stats.js** - Statistics display

### Data Flow

```
App (State) → AddTodo (Add) → TodoList → TodoItem (Display/Edit/Delete)
     ↓
   Stats (Display counts)
```

---

## Building the Components

### Step 3: Create the Header Component

Create `components/Header.js`:

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My Todo App
      </Text>
      <Text style={styles.subtitle}>
        Stay organized and productive
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B82F6', // Blue background
    padding: 24,
    paddingTop: 48,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#DBEAFE', // Light blue
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Header;
```

**What this does:**
- Creates a blue header with white text
- Displays app title and subtitle
- Uses StyleSheet for styling

### Step 4: Create the AddTodo Component

Create `components/AddTodo.js`:

```jsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Todo</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Enter your todo..."
          style={styles.input}
          placeholderTextColor="#9CA3AF"
        />
        
        <TouchableOpacity 
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 12,
    borderRadius: 8,
    marginLeft: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default AddTodo;
```

**What this does:**
- Creates a form with text input and add button
- Uses `useState` to manage input text
- Calls `onAdd` function when form is submitted
- Clears input after adding todo

### Step 5: Create the TodoItem Component

Create `components/TodoItem.js`:

```jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity 
          onPress={() => onToggle(todo.id)}
          style={styles.todoContent}
        >
          <View style={[
            styles.checkbox,
            todo.completed ? styles.checkboxCompleted : styles.checkboxIncomplete
          ]}>
            {todo.completed && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
          
          <View style={styles.textContainer}>
            <Text style={[
              styles.todoText,
              todo.completed && styles.completedText
            ]}>
              {todo.text}
            </Text>
            {todo.completed && (
              <Text style={styles.completedLabel}>Completed!</Text>
            )}
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => onDelete(todo.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteText}>×</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  checkboxIncomplete: {
    borderColor: '#D1D5DB',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  todoText: {
    fontSize: 16,
    color: '#111827',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#6B7280',
  },
  completedLabel: {
    fontSize: 14,
    color: '#10B981',
    marginTop: 4,
  },
  deleteButton: {
    backgroundColor: '#FEE2E2',
    padding: 8,
    borderRadius: 20,
  },
  deleteText: {
    color: '#DC2626',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TodoItem;
```

**What this does:**
- Displays individual todo with checkbox and delete button
- Shows different styles for completed/incomplete todos
- Handles toggle and delete actions

### Step 6: Create the TodoList Component

Create `components/TodoList.js`:

```jsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyEmoji}>📝</Text>
        <Text style={styles.emptyTitle}>No todos yet!</Text>
        <Text style={styles.emptySubtitle}>
          Add your first todo to get started
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem 
          todo={item} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    color: '#4B5563',
    marginBottom: 8,
  },
  emptySubtitle: {
    color: '#6B7280',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
  },
});

export default TodoList;
```

**What this does:**
- Uses FlatList to efficiently render todos
- Shows empty state when no todos exist
- Passes todo data to TodoItem components

### Step 7: Create the Stats Component

Create `components/Stats.js`:

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, styles.blueText]}>{total}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, styles.greenText]}>{completed}</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, styles.orangeText]}>{pending}</Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
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
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  blueText: {
    color: '#3B82F6',
  },
  greenText: {
    color: '#10B981',
  },
  orangeText: {
    color: '#F59E0B',
  },
  statLabel: {
    fontSize: 14,
    color: '#4B5563',
  },
});

export default Stats;
```

**What this does:**
- Calculates and displays todo statistics
- Shows total, completed, and pending counts
- Uses different colors for each stat

---

## Adding State Management

### Step 8: Create the Main App Component

Create `components/App.js`:

```jsx
import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Stats from './Stats';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from storage when app starts
  useEffect(() => {
    loadTodos();
  }, []);

  // Save todos to storage whenever todos change
  useEffect(() => {
    saveTodos();
  }, [todos]);

  const loadTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem('todos');
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.log('Error loading todos:', error);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.log('Error saving todos:', error);
    }
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      
      <View style={styles.content}>
        <AddTodo onAdd={addTodo} />
        
        {todos.length > 0 && <Stats todos={todos} />}
        
        <TodoList 
          todos={todos} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Light gray background
  },
  content: {
    flex: 1,
  },
});

export default App;
```

**What this does:**
- Manages all app state with `useState`
- Handles loading/saving todos with AsyncStorage
- Provides functions to add, toggle, and delete todos
- Renders all components in proper order

---

## Adding Data Persistence

### Step 9: Understanding AsyncStorage

AsyncStorage is already integrated in the App component. Here's how it works:

```jsx
// Save data
await AsyncStorage.setItem('todos', JSON.stringify(todos));

// Load data
const savedTodos = await AsyncStorage.getItem('todos');
if (savedTodos) {
  setTodos(JSON.parse(savedTodos));
}
```

**Key points:**
- Data is saved as JSON strings
- Use `JSON.stringify()` to save objects
- Use `JSON.parse()` to load objects
- Always wrap in try-catch for error handling

---

## Styling the App

### Step 10: Understanding the Color Scheme

The app uses a consistent color palette:

```jsx
// Primary colors
'#3B82F6'  // Blue (primary)
'#10B981'  // Green (success)
'#DC2626'  // Red (danger)
'#F59E0B'  // Orange (warning)

// Neutral colors
'#1F2937'  // Dark gray (text)
'#6B7280'  // Medium gray (secondary text)
'#9CA3AF'  // Light gray (placeholder)
'#F3F4F6'  // Very light gray (background)
'#FFFFFF'  // White
'#E5E7EB'  // Border gray
```

### Step 11: Common Styling Patterns

**Card Pattern:**
```jsx
const cardStyles = StyleSheet.create({
  container: {
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

**Button Pattern:**
```jsx
const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#3B82F6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
```

---

## Testing the App

### Step 12: Update the Main Entry Point

Update `app/index.js`:

```jsx
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import App from '../components/App';

export default function Main() {
  return (
    <>
      <StatusBar style="light" />
      <App />
    </>
  );
}
```

### Step 13: Create Component Index

Create `components/index.js`:

```jsx
// Export all components for easy importing
export { default as App } from './App';
export { default as Header } from './Header';
export { default as AddTodo } from './AddTodo';
export { default as TodoList } from './TodoList';
export { default as TodoItem } from './TodoItem';
export { default as Stats } from './Stats';
```

### Step 14: Run the App

```bash
# Start the development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web
npm run web
```

---

## Customization Ideas

### Step 15: Easy Modifications

**Change Colors:**
```jsx
// In Header.js - change to green
backgroundColor: '#10B981'  // Green instead of blue

// In AddTodo.js - change button to purple
backgroundColor: '#8B5CF6'  // Purple instead of blue
```

**Add New Features:**

1. **Priority Levels:**
   ```jsx
   // Add to todo object
   const newTodo = {
     id: Date.now(),
     text: text,
     completed: false,
     priority: 'high', // 'high', 'medium', 'low'
   };
   ```

2. **Categories:**
   ```jsx
   // Add category selection
   const categories = ['Work', 'Personal', 'Shopping'];
   ```

3. **Due Dates:**
   ```jsx
   // Add date picker
   import DateTimePicker from '@react-native-community/datetimepicker';
   ```

---

## Troubleshooting

### Common Issues and Solutions

**1. App won't start:**
```bash
# Clear cache and reinstall
npm start -- --clear
```

**2. Styling not working:**
- Check that StyleSheet is imported
- Verify color codes are correct
- Ensure styles are applied to correct components

**3. Data not saving:**
- Check AsyncStorage import
- Verify try-catch blocks are in place
- Test on physical device (AsyncStorage works better on device)

**4. Components not rendering:**
- Check import statements
- Verify component exports
- Ensure props are passed correctly

**5. Performance issues:**
- Use FlatList for long lists
- Avoid unnecessary re-renders
- Use React.memo for static components

---

## Next Steps

### Advanced Features to Add

1. **Search and Filter**
2. **Edit Todo Functionality**
3. **Categories and Tags**
4. **Due Dates and Reminders**
5. **Dark Mode Support**
6. **Data Export/Import**
7. **User Authentication**
8. **Cloud Synchronization**

### Learning Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [AsyncStorage Guide](https://react-native-async-storage.github.io/async-storage/)
- [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)

---

## Final Checklist

Before submitting your app, make sure:

- [ ] All components render correctly
- [ ] Todos can be added, completed, and deleted
- [ ] Data persists between app restarts
- [ ] App looks good on different screen sizes
- [ ] No console errors
- [ ] Code is well-commented
- [ ] Components are reusable

---

**Congratulations! 🎉**

You've successfully built a complete React Native Todo App! This project demonstrates:

- Component-based architecture
- State management with hooks
- Data persistence with AsyncStorage
- Modern React Native styling
- User interaction patterns

This foundation will help you build more complex mobile applications in the future.
