import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignInScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require('../assets/logo1.png')} style={styles.logo} />

        <Text style={styles.title}>Sign in to your account</Text>

        {/* Email */}
        <Text>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />

        {/* Password */}
        <Text>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Image
              source={
                passwordVisible
                  ? require('../assets/eye_on.png')
                  : require('../assets/eye_off.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Sign in button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        {/* Social login */}
        <Text style={styles.orText}>Or sign in with</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.circle}>
            <Image
              source={require('../assets/google-icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Image
              source={require('../assets/facebook-icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Link to SignUp */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Don’t have an account? Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 15,
  },
  inputPassword: { flex: 1, padding: 10 },
  eyeIcon: { width: 24, height: 24, marginRight: 10 },
  button: {
    backgroundColor: '#004d40',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  orText: { marginVertical: 15, textAlign: 'center', color: '#666' },
  socialRow: { flexDirection: 'row', justifyContent: 'center', gap: 15 },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { width: 50, height: 50, resizeMode: 'contain' },
  link: { marginTop: 20, color: 'blue', textAlign: 'center' },

  view: {
    flex: 1,
  },
});
