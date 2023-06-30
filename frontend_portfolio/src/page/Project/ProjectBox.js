import '../../style/Project.scss';

export default function ProjectBox() {
  return (
    <section id="projectBox">
      <h3>project</h3>
      <div class="project_inner">
        <div class="ohou">
          <div class="device_img project"></div>
          <div class="project_text project">
            <p>오늘의집</p>
            <p>&#35;반응형 &#35;웹표준</p>
            <p>첫번째 프로젝트로 학원 수업 들으며 배운 내용을 반영하며 제작한 페이지로 미흡한 점이 보이지만 초반에 제작한 만큼 최대한 웹 표준을 준수하고 짜임새 있게 만들었습니다&#46;</p>
            <button class="btn" onclick="ohouplan()">plan</button>
            <button class="web_btn" onclick="ohou()">web</button>
          </div>
        </div>
        <div class="ediya">
          <div class="device_img project"></div>
          <div class="project_text project">
            <p>이디야</p>
            <p>&#35;반응형 &#35;웹표준 &#35;데이터최소화</p>
            <p>혼자 독학하면서 만든 프로젝트로 디자인적면에서 좀 더 신경 쓰고 페이지 로드 속도를 빠르게 하기 위해 데이터 낭비를 최소화하고자 노력했습니다&#46;</p>
            <button class="btn" onclick="ediyaplan()">plan</button>
            <button class="web_btn" onclick="ediya()">web</button>
          </div>
        </div>
        <div class="portfolio1">
          <div class="device_img project"></div>
          <div class="project_text project">
            <p>portfolio ver&#46;1</p>
            <p>&#35;반응형 &#35;웹표준 &#35;가독성</p>
            <p>처음으로 만든 포트폴리오로 필요한 정보만 빠르게 제공하고자 하였고 깔끔하게 제작하며 지루하지 않게 중간에 scrollmagic을 사용했습니다&#46; 그 외에도 파비콘 로고를 직접 제작하는 등의 노력을 기울였습니다&#46;</p>
            <button class="btn" onclick="portfoilo1plan()">plan</button>
            <button class="web_btn" onclick="portfolio1()">web</button>
          </div>
        </div>
        <div class="interactive">
          <div class="device_img project"></div>
          <div class="project_text project">
            <p>learning interactive</p>
            <p>&#35;interactive &#35;pc최적화</p>
            <p>인터렉티브한 페이지 만들기 교재를 읽으며 공부하다 직접 만들며 공부하고 싶어 만들었습니다&#46;</p>
            <button class="btn" onclick="interactiveplan()">plan</button>
            <button class="web_btn" onclick="interactive()">web</button>
          </div>
        </div>
        <div class="portfolio2">
          <div class="device_img project"></div>
          <div class="project_text project">
            <p>portfolio ver&#46;2</p>
            <p>&#35;sass &#35;반응형 &#35;웹표준 &#35;다양한기술사용</p>
            <p>두번째로 만든 포트폴리오로 첫번째와 다르게 sass를 이용하여 만들었습니다&#46; 또한&#44; 지루하지 않도록 애니메이션이나 기능적인 부분을 보완하여 제작했습니다&#46;</p>
            <button class="btn" onclick="portfolio2plan()">plan</button>
            <button class="web_btn" onclick="portfolio2()">web</button>
          </div>
        </div>
      </div>
    </section>
  )
}
