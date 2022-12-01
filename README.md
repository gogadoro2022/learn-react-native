# react native course in Udemy

🤔 2022.12.1

**사용 컴포넌트**

- View : 스타일링의 기본 구조. 블록으로 감싸주기 때문에, 스타일링 목적으로 컴포넌트를 감싸기도 함
- TextInput : 라이브러리 react-native-paper에서 사용
- SafeAreaView : ios에서 사용가능. 안드로이드는 노치가 없기 때문에 스타일에서 값을 따로 주어야한다.
    
    ```jsx
    padding : Platform.OS === 'android' ? StatusBar.cuurentHeight : 0
    ```
    
- StatusBar
- Text

---

**스타일 설정에서도 파라미터를 넘길 수 있다.**

```jsx
import {StyleSheet} from 'react-native'

const style = (size) => ({   #괄호가 있는 이유는?
	radius: { borderRadius: size/2, width: size }
})

요런식...
```

기본적으로는 const style = StyleSheet.create( {} )
