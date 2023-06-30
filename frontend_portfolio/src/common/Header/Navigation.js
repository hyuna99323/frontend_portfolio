// import {Link} from 'react-scroll'

export default function Navigation() {
  return (
      <nav class="unb">
        <h2 class="blind">user navigation</h2>
        <input type="checkbox" id="check_box" />
        <label for="check_box">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div id="slide_menu">
          <div class="slide_inner">
            
            {/* <!-- home --> */}
            <input type="checkbox" id="slide_btn01" />
            <label for="slide_btn01">
              <a href="../html/portfolio2.html">home</a>
            </label>
            {/* <!-- about --> */}
            <input type="checkbox" id="slide_btn02" />
            <label for="slide_btn02">
              <a href="#about">about</a>
            </label>
            {/* <!-- advantage --> */}
            <input type="checkbox" id="slide_btn03" />
            <label for="slide_btn03">
              <a href="#advantage">advantage</a>
            </label>
            {/* <!-- skill --> */}
            <input type="checkbox" id="slide_btn04" />
            <label for="slide_btn04">
              <a href="#skill">skill</a>
            </label>
            {/* <!-- project --> */}
            <input type="checkbox" id="slide_btn05" />
            <label for="slide_btn05">
              <a href="#project">project</a>
            </label>
            {/* <!-- clone --> */}
            <input type="checkbox" id="slide_btn06" />
            <label for="slide_btn06">
              <a href="#clone">clone</a>
            </label>
            {/* <!-- contact --> */}
            <input type="checkbox" id="slide_btn07" />
            <label for="slide_btn07">
              <a href="#contact">contact</a>
            </label>
          </div>
        </div>
      </nav>
  )
}
