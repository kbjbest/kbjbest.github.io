---
title: "synchronized"
strapline: "synchronized에 대해 알아보자"
description: ""
header:
 overlay_image: /assets/images/source-code.jpg
categories:
  - "Java"
tag:
  - "synchronized"
toc: true
last_modified_at: 2019-04-16
comments: true
mathjax: true
---
## synchronized 기본 개념
둘 이상의 쓰레드가 공동의 자원(파일이나 메모리 블록)을 공유하는 경우, 순서를 잘 맞추어 다른 쓰레드가 자원을 사용하고 있는 동안 한 쓰레드가 절대 자원을 변경할 수 없도록 해야 한다.
한 쓰레드가 파일에서 레코드를 수정하는데, 다른 쓰레드가 동시에 같은 레코드를 수정하면 심각한 문제가 발생할 수 있다. 이런 상황을 처리할 수 있는 한 방법은 관련된 쓰레드에 대한 동기화(synchronization)를 이용하는 것이다.

동기화의 목적은 여러 개의 쓰레드가 하나의 자원에 접근하려 할 대 주어진 순간에는 오직 하나의 쓰레드만이 접근 가능하도록 하는 것이다. 동기화를 이용해 쓰레드의 실행을 관리할 수 있는 방법은 두 가지가 있다.

- 코드를 메소드 수준에서 관리할 수 있다. - 동기화 메소드
- 코드를 블록 수준에서 관리할 수 있다. - 동기화 블록

동기화 메소드와 동기화 블록은 모두 synchronized를 이용하여서 구현된다. synchronized는 어떤 객체에서도 특정 문장 블록에 대해 lock설정을 할 수 있다. 사용방법은 아래와 같다.
~~~java
synchronized(theObject)
	statement;	 // theObject가 동기화된다.

synchronized(theObject) {
	statement;	 // theOjbect가 동기화된다.
}
~~~

statement문장이 실행되는 동안 theObject는 동기화된 다른 쓰레드에서 사용할 수 
없다. 동기화된 다른 쓰레드라는 것은 위의 코드와 동일하게 synchronized를 
사용하였거나 synchronized method를 사용한 쓰레드를 의미한다. synchronized 
method의 예제는 아래와 같다. 
~~~java 
class theObject { 
	synchronized public void method() { 
		statement; 
	}
} 
~~~

## synchronized block VS synchronized method
synnchronized method가 synchronized block보다 나은 특별한 장점은 없다.
굳이 하나를 뽑자면 this라는 오브젝트 레퍼런스를 포함시킬 필요가 없다는건데 이것도 그렇게 큰 장점이라고는 볼 수 없다.

method
~~~java
public synchronized void method() { //block이었으면 this를 넣어야 함
	...
	...
	...
}
~~~

block
~~~java
public void method() {
	synchronized(this) { // this를 넣음
		...
		...
		...
	}
}
~~~

synchronized block이 synchronized method보다 많은면에서 유연하다.
왜냐하면 synchronized method는 메소드 전체의 lock을 걸지만 block은 다른객체를 사용하여 특정 부분에 lock을 걸 수 있기 때문이다.
~~~java
//객체 전체를 잠금
...
private synchronized void someInputRelatedWork() {
	...
}
private synchronized void someOutputRelatedWork() {
	...
}
~~~
Vs.
~~~java
// 특정 부분만 잠금
Object inputLock = new Object();
Object outputLock = new Object();

private void someInputRelatedWork() {
	synchronize(inputLock) {
		...
	}
}
private void someOutputRelatedWork() {
	synchronize(outputLock) {
		...
	}
}
~~~
또 synchronized block을 사용하게 되면 밑의 코드처럼 메소드 내에서 필요한 부분만 lock을 걸 수 있다.
~~~java
private void method() {
	... 코드
	... 코드
	... 코드
	synchronized(lock) {
		... 코드
	}
	... 코드
	... 코드
	... 코드
	... 코드
}
~~~

출처: https://hashcode.co.kr [Hashcode]