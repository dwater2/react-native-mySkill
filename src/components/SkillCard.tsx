import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: String;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {

    return (
        <TouchableOpacity 
            style={styles.buttonSkill}
            {...rest}>
            <Text 
            style={[styles.textSkill]}>
                {skill}
            </Text> 
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    
    buttonSkill: {
      backgroundColor: '#1F1E25',
      padding: 20,
      borderRadius: 20,
      alignItems: 'center',
      marginVertical: 10,
    },
    textSkill: {
      color: '#FFF',
      fontSize: 12,
      fontWeight: 'bold',
    }
  });