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
