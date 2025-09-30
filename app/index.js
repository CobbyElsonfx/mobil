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