import '../../style/Home.scss';
import homeImage from '../../img/main_image.jpg';

export default function HomeBox() {
  return (
    <section id="homeBox">
      <h2>oh &#45; hyuna</h2>
      <img src={homeImage} alt="오현아 인물사진" />
      <p><span>오</span>늘도 <span>현</span>명하고 <span>아</span>름답게</p>
    </section>
  )
}
