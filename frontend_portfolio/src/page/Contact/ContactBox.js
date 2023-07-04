import '../../style/Contact.scss';

export default function ContactBox() {
  return (
    <section id="contactBox">
      <h3 class="blind">contact</h3>
      <div class="email_border"></div>
      <div class="contact_text">
        <ul>
          <li>부족한 제 포트폴리오를 끝까지 봐주셔서 감사합니다&#46;</li>
          <li>궁금한 점이 있으시면 연락주시기 바랍니다&#46;</li>
          <li>연락주시면 3일이내 회신드리겠습니다&#46;</li>
          <li>감사합니다 &#58;&#41;</li>
        </ul>
      </div>
      
      {/* 이메일 주소 */}
      <div class="email">
        <a href="mailto:gusdk99323&#64;gmail.com"><span class="highlight">gusdk99323&#64;gmail&#46;com</span></a>
      </div>
    </section>
  )
}
