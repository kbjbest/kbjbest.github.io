var store = [{
        "title": "[웹 에디터] 코드 미리보기, 코드삽입 사이트 codepen",
        "excerpt":"codepen : Front-end designer playground  작성한 HTML, CSS, JavaScript에 코드의 결과를 알려주는 웹사이트이다. 또한 작업한 것을 자신의 블로그나 개인홈페이지에 삽입 할 수 있다.   1. http://codepen.io/ 여기 회원가입해야한다.  2. Create 버튼을 클릭한다.    3. 소스를 적고 Save버튼을 클릭한다.    4. 저장 후 우측하단에 Embed버튼을 클릭하면 Embed This Pen 팝업이 뜨고 맨 아래 코드를 복사한다.    5. 자신이 쓰는 글을 HTML형식으로 바꾼 후 Copy &amp; Paste하면 끝!  See the Pen KbevWj by Beomju Kim (@kbjbest) on CodePen.    ","categories": ["Editor"],
        "tags": ["web editor","source coding tool"],
        "url": "http://localhost:4000/editor/codepen/",
        "teaser":null},{
        "title": "[HTML] 알면 유용하거나 자세히 몰랐던 HTML 소스",
        "excerpt":"HTML TAG : Learning the HTML Source  내가 작업하면서 알게 된 것이나 유용한 HTML 관련 소스들을 정리하는 목적에 블로깅이며 계속 업데이트 할 것이다.   1. &lt;intut type=”text” required&gt;   input 태그에 필수 값 처리를 해주는 방법으로 알아서 유효성 처리를 해준다. 회원가입 같은 페이지 만들 때 활용할 수 있다.     2. label, radio   input과 label을 연동시키지 않으면 label을 눌렀을 때 라디오 버튼이 선택되지 않는다. 연동시키는 방법에는     label태그로 input태그를 감싸는 방법과,   label태그에 input의 ID를 지정해주는 방법이 있다. checked=’checked’ 대신 checked만 써도 되지만, 표준 문법에 맞는 것은 전자이므로 FM들은 전자를 쓰기바람..ㅎㅎ(근데 나도 약간 FM스타일)   예시1)라벨감싸기  &lt;label&gt;&lt;input TYPE='radio' name='group1' value='apple' /&gt;사과&lt;/label&gt; &lt;label&gt;&lt;input TYPE='radio' name='group1' value='banana' /&gt;바나나&lt;/label&gt; &lt;label&gt;&lt;input TYPE='radio' name='group1' value='lemon' checked='checked' /&gt;레몬&lt;/label&gt;   예시2)ID지정  &lt;input TYPE='radio' id='r1' name='group1' value='apple' /&gt; &lt;label for='r1'&gt;사과&lt;/label&gt; &lt;input TYPE='radio' id='r2' name='group1' value='banana' /&gt; &lt;label for='r2'&gt;바나나&lt;/label&gt; &lt;input TYPE='radio' id='r3' name='group1' value='lemon' checked='checked' /&gt; &lt;label for='r3'&gt;레몬&lt;/label&gt;   ","categories": ["HTML"],
        "tags": ["HTML","tag"],
        "url": "http://localhost:4000/html/html-tag/",
        "teaser":null},{
        "title": "블로그 포스팅 소스 작성 요령",
        "excerpt":"abc : 대제목  abc : 중제목  abc : 소제목  abc : 굵게     abc   def : 넘버링            abc : 목록    : 이미지 삽입   ______________________ : 경계선           codeblock 예시  function syntaxHighlight(code) {    var foo = 'Hello World';    var bar = 100; }  ","categories": ["Blogging"],
        "tags": ["markdown"],
        "url": "http://localhost:4000/blogging/sample-source/",
        "teaser":null},{
        "title": "JAVA Thread 사용하기",
        "excerpt":"public class ThreadTest implements Runnable {   @Override  public void run() {   while (true) {        System.out.println(\"***** &lt;&lt;\" + Thread.currentThread().getName()  + \"&gt;&gt; *****\");         try {     Thread.sleep(1000);    } catch (InterruptedException e) {     e.printStackTrace();    }       aMethod();   }  }   public void aMethod() {    Thread.dumpStack();  //현재 메소드와 콘솔 스트림을 호출하는 모든 메소드 출력    }      public static void main(String[] args) {        // 두개의 쓰레드 생성   Thread t1 = new Thread(new ThreadTest(), \"첫번째 쓰레드\");   t1.start();    Thread t2 = new Thread(new ThreadTest(), \"두번째 쓰레드\");   t2.start();      // 쓰레드에 대한 정보 출력   int threadCnt = Thread.activeCount(); // 실행중인 쓰레드의 갯수   Thread[] threads = new Thread[threadCnt];    Thread.enumerate(threads); // 인수로 받은 배열을 실행중인 쓰레드로 채운다.         for (int i = 0; i &lt; threadCnt; i++) {      Thread t = threads[i];       System.out.println(\"쓰레드의 이름은 : \" + t.getName());    }   }  }    출처: https://javafactory.tistory.com/1365 [FreeLife의 저장소]  ","categories": ["Java"],
        "tags": ["Thread","run()","start()"],
        "url": "http://localhost:4000/java/Thread.dumpStack()/",
        "teaser":null}]
