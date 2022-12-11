## 자바스크립트 코드가 어떻게 네이트브에서 실행되는가?

- 화면 : app이 실행되면 일단 view 코드를 컴파일해서 네이티브 화면으로 뿌려줌.
- 로직 : 액션이 발생하면 네이티브 코드는 javascript 의 VM(virtual machine)을 실행시킴 (safari도 자바스크립트 엔진을 사용). 자바스크립트 쓰레드의 로직이 VM으로 전달되고 VM이 해석해서 네이티브 플랫폼 쓰레드로 전달함.

## 리액트 네이티브 샘플 코드

[React Native 프로젝트 살펴보기](https://devbksheen.tistory.com/entry/React-Native-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0)

<aside>
💡 import type {node} from react 란?

타입스크립트 코드. 

</aside>

<aside>
💡 Prttie 란?

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

</aside>

## React native paper

사용가능한 블럭들이 많은 라이브러리. 여기서 공식 API들을 읽기만 해도 여러가지것들을 응용할 수 있을듯.

[](https://callstack.github.io/react-native-paper/)

<aside>
🤔 ProgressBar

</aside>

## React native components

<aside>
🤔 FlatList

프롭스로 data={} , renderItem={} 을 주어야 한다.

data에는 전달하려는 데이터의 source가 들어가고,

renderItem 에는 데이터를 받아 처리하는 콜백함수가 들어간다.

dot property 를 사용해서 source의 속성값에 접근할 수 있다.

</aside>

## React native Error Collection

<aside>
🤔 run android 에러

- JDK 버젼 재설치로 해결. 자바 19와 네이티브의 gradle이 호환되지 않음. 자바 버젼을 낮춰서 해결
- 안드로이드 애뮬레이터가 실행되지 않음 → 안드로이드 스튜디오에서 virtual device 생성을 하면서 필요한 툴킷을 설치함. 해결
</aside>

<aside>
🤔 styled-components 설치 에러

문제 : 

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
...
```

해결방법:

```jsx
npm install styled-components --legacy-peer-deps

## 버젼 호환 문제를 무시하는 코드라고 한다.
```

</aside>

## 학습 일지

<aside>
🤔 2022.11.30

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

</aside>

<aside>
🤔 2022.12.1

중요) 지금은 코딩을 배우고 있지만, 이 방법을 0에서 생각해낸 ‘이 생각’을 배워야 하는 것.

→ props를 어떻게 활용하는지

→ 상위 컴포넌트랑 하위 컴포넌트가 스테이트를 어떻게 주고받는지

---

날짜 계산

[밀리초 시,분,초 계산 이해하기.](https://blogofpjj.tistory.com/37)

- % 연산자. 나눈 나머지 값을 반환

---

### 헷갈리는 useEffect 인자 다시 정리!

useEffect (callback, 배열)

두번째 인자 배열의 값이 바뀌면 useEffect가 마운팅됨. 배열값이 비어있으면 첫번째 렌더링 될 때만 마운팅.

---

### interval 관련 web API

- setInterval()
    - 두번째 인자 (밀리세컨) 마다 첫번째 콜백을 실행한다.
    
    [setInterval() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
    
- clearInterval()
    - interval 을 초기화한다. 인터벌 id을 인자로 넣어주는것 같은데 아직 헷갈린다. 더 사용해보면서 알아봐야겠다.

---

리액네이티브에서는 onClick 을 onPress 라고 한다.

---

🔥 onEnd 함수를 하위컴포넌트에서 충분히 만들어서 쓸 수 있는데, 굳이 상위 컴포넌트에서 프롭스로 받아와 사용하고 있었다. 확인해보니 onEnd 함수에 상태변경 로직이 많았다. 그리고 그 상태들은 하위컴포넌트에서 컨트롤 할 수 없었다. 상태들이 상위 컴포넌트에서 여러 하위컴포넌트에 영향을 주고 있었기 때문에. 즉 엄브렐러를 씌우고 있었다. 따라서 여러 상태들을 컨트롤 할 수 있는 상위컴포넌트에 함수를 선언하고, 해당 함수가 필요한 하위 컴포넌트에 함수를 프롭스로 전달했던 것이다.

</aside>

<aside>
🤔 2022.12.4

- FlatList 안에 또다른 FlatList를 만들어서 사용해봄.

사용한 데이터 : 

```jsx
const tagData = [
  {
    title: '기주',
    content: ['기주1', '기주2'],
  },
  {
    title: '재료',
    content: ['재료1', '재료2'],
  },
  {
    title: '도구',
    content: ['도구1', '도구2'],
  },
  {
    title: '기법',
    content: ['기법1', '기법2'],
  },
  {
    title: '잔',
    content: ['잔'],
  },
  {
    title: '도수',
    content: ['도수'],
  },
];
```

어려웠던 점 :

1. 배열안에 객체 데이터를 정의하는것 처음에 헷갈렸음. 지금은 title에 들어가있는 값을 처음에는 ‘키’ : ‘밸류’ 에서 키 자리에 넣으려고 했었음. 확실하게 안 점은 사용자에게 보여주는 data는 value로 넣어야 한다. ‘key’는 컴퓨터가 value를 찾기위한 장치.
2. FaltList 안에 FaltList를 짤 때. data 프롭을 통해 자료를 전달하는데 원하는 값을 제대로 불러오는지 확인하게 위해 console.log로 찍어보면서 자료 구조를 확인해야 했음.
</aside>

<aside>
🤔 2022.12.5

궁금 : 

1. 컴포넌트에 style을 전달할 때, 상위에서 style={{margin:16}} 으로 {margin:16} 이라는 객체를 전달했다. 그리고 하위에서는 디컨스트럭트로 ( {style={} } ) 로 받아왔다. 그런데 여기서 왜 style = {} 을 해주어야 프롭이 전달되는걸까? 그냥 ( { style } ) 로 했더니 전달되지 않았다. style = {} 은 단지 기본값을 전해주는것 아닌가?
</aside>

<aside>
🤔 2022.12.9

- YOGA 라는 RN의 레이아웃 라이브러리 사용
    - [yoga playground](https://yogalayout.com/playground/)
</aside>

<aside>
🤔 2022.12.11

- 앱의 브랜딩이 떠오르면서 style consistancy가 중요해졌다. 그에 따라 design ops 라는 개념이 생겼고, 리액트 네이티브에서는 리액트에서 사용하던 styled-compoents 를 활용할 수 있다
- 여러 라이브러리를 설치하다 보니 npm 의 문제라고 하는 의존성 문제가 뭔지 슬슬 실감이 난다. 호환 버젼이 달라서 문제가 되거나, 이미 설치된 하위버젼이 있는데 상위버젼을 설치하게 됨.
    
    [package.json에 쌓여있는 개발 부채](https://yceffort.kr/2021/10/debt-of-package-json)
    

---

### 리액트 네이티브 스타일링 Theme 만들기

- 일관성을 갖기 위해서 theme 세팅을 한다.
- 일종의 모듈을 만드는 느낌으로, 각각의 값들을 각각의 파일에 입력한 다음 export 해주고, index.js에 여러개를 임포트 해온다. 나중에 사용할때는 index.js 에서 다 찾아갈 수 있도록.
- Theme 를 모듈처럼 만들고, ThemeProvider를 이용해 Context API로 App전체를 감싸줌

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/930b255f-2f9c-42a6-8d97-75bd3e816c1d/Untitled.png)

---

### Array.from (new Array(n))

Array.from() 은 인자를 배열로 만드는 메소드.

new Array (n)은 length가 n개인 배열을 만든다.

---

### 일관성을 위해 Text 도 커스텀 컴포넌트를 만들 수 있음

지금은 학습속도를 위해서 딥하게 들어가지는 않겠지만 알아두자. styled-component , 컴포넌트의 props 속성을 이용해서, js파일에 TEXT 컴포넌트를 커스터마이징 해둠. 앱에서 사용해야 하는 primary 폰트 사이즈라던지, 색상으로 기본값을 주고, 받아와야 하는 속성을 세팅해서 사용하면서 다르게 커스터 마이징 할 수 있도록.

규모가 커서 일관성을 놓치기 쉬운 작업을 하거나, 많은 사람들이랑 협업할 때는 꼭 필요한 세팅일 수 있겠다.

간단한 작업을 빠르게 작업해야 할 때는 오히려 속도를 더디게할 수 있음.

**“개발자는 단순 반복 노동을 좋아하지 않는다…”**

---

</aside>
