import js_jpeg from './js.jpeg';
import html_pic_png from './html_pic.png';
import css_png from './css.png';

function About() {
    return (
      <div className="About">
        <section id="About">
            <div id="about_container">
                <h3 id="b3">Big 3 of Web Development</h3>
                    <a href="https://html.com" id="html_com">
                            <img id="html_img" src={html_pic_png} alt="html" />
                    </a>
                        <a href="https://www.w3schools.com/js/js_examples.asp" id="js_com">
                            <img id="js_img" src={js_jpeg} alt="JavaScript" />
                    </a>
                        <a href="https://www.w3schools.com/css/css_intro.asp" id="css_com">
                            <img id="css_img" src={css_png} alt="css" />
                     </a>
                </div>
            </section>
        </div>
    );
  }
  
  export default About;
  