import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({onSave, icon, color}) {
    return (
        <Pressable onPress={onSave}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

export default IconButton;