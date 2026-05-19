import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Wifi, Coffee, Tent, Droplets, Bed, Users, Calendar, ChevronRight, Star, ArrowUp } from 'lucide-react';
import './App.css';
import heroImage from './assets/arisol-main.png';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.title = "쌍곡 아리솔펜션 - 아름다운 자연 속 힐링";

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const naverPlaceUrl = "https://m.place.naver.com/accommodation/1680206389/room";

  return (
    <div className="app-container">
      {/* Header / Nav */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">아리솔펜션</div>
          <div className="nav-links">
            <a href="#about">소개</a>
            <a href="#rooms">객실안내</a>
            <a href="#amenities">부대시설</a>
            <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="btn-nav-reserve">실시간 예약</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="welcome-badge">Welcome To</div>
          <h1 className="hero-title">아리솔펜션</h1>
          <p className="hero-subtitle">충북 괴산 쌍곡계곡 바로 앞, 칠보산의 여유가 함께하는 힐링 스팟</p>
          <div className="hero-buttons">
            <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <Calendar size={20} style={{ marginRight: '8px' }} />
              실시간 예약하기
            </a>
            <button className="btn-secondary" onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}>
              자세히 보기
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about container">
        <motion.div
          className="about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="about-image">
            <img src="/valley.png" alt="쌍곡계곡 풍경" />
          </div>
          <div className="about-text">
            <span className="section-tag">About Us</span>
            <h3>쌍곡계곡의 맑은 물소리와<br />함께하는 완벽한 휴식</h3>
            <p className="highlight-text">
              아리솔펜션은 모던하고 깔끔한 외관(블랙&화이트 톤)과 편리한 부대시설을 자랑합니다.
            </p>
            <p>
              펜션 바로 건너편에 맑은 쌍곡계곡이 흐르고 있어 여름철 물놀이와 다슬기 잡기에 최적의 장소입니다.
              또한 칠보산 등산로 입구에 위치해 산책과 등산을 즐기기에도 좋으며,
              밤에는 조용한 자연 속에서 쏟아지는 별을 감상할 수 있습니다.
            </p>
            <ul className="about-features">
              <li><Star size={16} /> 깔끔하고 모던한 독채형 객실 구조</li>
              <li><Star size={16} /> 넓은 야외 주차장 완비</li>
              <li><Star size={16} /> 친절한 서비스와 쾌적한 룸 컨디션</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="rooms">
        <div className="container">
          <span className="section-tag center">Our Rooms</span>
          <h2 className="section-title">객실 안내</h2>
          <p className="section-subtitle">아늑하고 편안한 다양한 타입의 객실이 준비되어 있습니다.</p>

          <motion.div
            className="rooms-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Room 1 */}
            <motion.div className="room-card" variants={fadeIn}>
              <div className="room-image" style={{ backgroundColor: '#e2e8f0' }}>
                <div className="room-placeholder"><Bed size={48} color="#94a3b8" /></div>
              </div>
              <div className="room-info">
                <div className="room-header">
                  <h4>침대방 (커플/소가족)</h4>
                  <span className="room-price">예약창 확인</span>
                </div>
                <p>아늑한 침대와 깨끗한 침구류가 세팅된 객실입니다.</p>
                <div className="room-meta">
                  <span><Users size={16} /> 기준 2인 / 최대 4인</span>
                  <span><Wifi size={16} /> 무료 Wi-Fi</span>
                </div>
                <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="btn-room-reserve">객실 예약하기 <ChevronRight size={16} /></a>
              </div>
            </motion.div>

            {/* Room 2 */}
            <motion.div className="room-card" variants={fadeIn}>
              <div className="room-image" style={{ backgroundColor: '#e2e8f0' }}>
                <div className="room-placeholder"><Users size={48} color="#94a3b8" /></div>
              </div>
              <div className="room-info">
                <div className="room-header">
                  <h4>온돌방 (가족/단체)</h4>
                  <span className="room-price">예약창 확인</span>
                </div>
                <p>넓은 거실과 방이 분리되어 있어 단체 여행객에게 적합합니다.</p>
                <div className="room-meta">
                  <span><Users size={16} /> 기준 4인 / 최대 8인</span>
                  <span><Wifi size={16} /> 무료 Wi-Fi</span>
                </div>
                <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="btn-room-reserve">객실 예약하기 <ChevronRight size={16} /></a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="amenities">
        <div className="container">
          <span className="section-tag center">Facilities</span>
          <h2 className="section-title">특별한 부대시설</h2>
          <p className="section-subtitle">고객님의 편안한 휴식을 위해 준비했습니다.</p>

          <motion.div
            className="amenities-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { icon: <MapPin size={30} />, title: "쌍곡계곡 인접", desc: "도보 1분 거리, 맑은 계곡물에서 물놀이" },
              { icon: <Tent size={30} />, title: "개별 바비큐장", desc: "객실별 프라이빗 바비큐 (숯/그릴 세트 20,000원)" },
              { icon: <Droplets size={30} />, title: "물놀이 용품 대여", desc: "튜브 및 구명조끼 대여 가능 (각 5,000원)" },
              { icon: <Coffee size={30} />, title: "야외 파라솔 데크", desc: "빨강/파랑 파라솔 아래서 즐기는 커피 한 잔" },
              { icon: <Bed size={30} />, title: "쾌적한 객실 환경", desc: "침대방, 가족실, 개별 화장실/샤워실 완비" },
              { icon: <Wifi size={30} />, title: "초고속 와이파이", desc: "전 객실 무료 Wi-Fi 제공" }
            ].map((amenity, index) => (
              <motion.div key={index} className="amenity-card" variants={fadeIn}>
                <div className="amenity-icon">{amenity.icon}</div>
                <h4>{amenity.title}</h4>
                <p>{amenity.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">오시는 길 및 문의</h2>
          <p className="section-subtitle">아리솔펜션으로 오시는 길을 안내해 드립니다.</p>

          <motion.div
            className="contact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="contact-info-box">
              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div>
                  <h4>전화 문의</h4>
                  <p className="phone-number">010-5246-2125</p>
                  <p className="sub-text">언제든 친절하게 상담해 드립니다.</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4>오시는 길</h4>
                  <p>충청북도 괴산군 칠성면 쌍곡로 574-6</p>
                  <p className="sub-text">(지번: 태성리 산 41-1)</p>
                </div>
              </div>

              <a href="https://naver.me/G28hzxIF" target="_blank" rel="noreferrer" className="btn-map">
                네이버 지도로 보기
              </a>
            </div>

            <div className="map-placeholder">
              <div className="map-inner">
                <MapPin size={48} color="#FF7F50" />
                <p>쌍곡 아리솔펜션</p>
                <span>칠보산 등산로 입구 / 쌍곡계곡 앞</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} 쌍곡 아리솔펜션. All rights reserved.</p>
          <p className="footer-sub">충북 괴산군 칠성면 쌍곡로 574-6 | 대표전화: 010-5246-2125</p>
        </div>
      </footer>
      {/* Scroll to Top Button */}
      <motion.button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 50 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}

export default App;
