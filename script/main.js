// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run amimation if so
        if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
          animationTimeline();
        } 
      });
    });
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );

  // 动画结束后直接显示蛋糕和按钮，隐藏最后祝福语
  tl.call(() => {
    document.querySelector('.cake-area').style.display = 'block';
    document.querySelector('.final-outro-area').style.display = 'none';
    document.querySelector('.wish-text-img-area').style.display = 'none';
    // 插入SVG蛋糕
    document.getElementById('svg-cake-wrapper').innerHTML = `
      <svg viewBox="0 0 220 220">
        <!-- 蛋糕底部 -->
        <ellipse cx="110" cy="180" rx="90" ry="25" fill="#fff6e6"/>
        <!-- 蛋糕主体 -->
        <ellipse cx="110" cy="130" rx="80" ry="60" fill="#fffbe9"/>
        <!-- 粉色奶油 -->
        <path d="M30,130 Q50,110 70,130 Q90,150 110,130 Q130,110 150,130 Q170,150 190,130 Q190,170 110,190 Q30,170 30,130 Z" fill="#ffd1e3"/>
        <!-- 奶油球 -->
        <ellipse cx="50" cy="140" rx="12" ry="10" fill="#fff"/>
        <ellipse cx="90" cy="150" rx="10" ry="8" fill="#fff"/>
        <ellipse cx="130" cy="150" rx="10" ry="8" fill="#fff"/>
        <ellipse cx="170" cy="140" rx="12" ry="10" fill="#fff"/>
        <!-- 彩糖 -->
        <circle cx="60" cy="130" r="3" fill="#ffb347"/>
        <circle cx="80" cy="145" r="2.5" fill="#ff69b4"/>
        <circle cx="100" cy="140" r="2.5" fill="#7ec850"/>
        <circle cx="120" cy="145" r="2.5" fill="#ffb347"/>
        <circle cx="140" cy="140" r="2.5" fill="#ff69b4"/>
        <circle cx="160" cy="145" r="2.5" fill="#7ec850"/>
        <!-- 爪印 -->
        <ellipse cx="60" cy="170" rx="6" ry="4" fill="#222"/>
        <ellipse cx="60" cy="166" rx="1.2" ry="1.2" fill="#222"/>
        <ellipse cx="57" cy="172" rx="1.2" ry="1.2" fill="#222"/>
        <ellipse cx="63" cy="172" rx="1.2" ry="1.2" fill="#222"/>
        <ellipse cx="160" cy="170" rx="6" ry="4" fill="#222"/>
        <ellipse cx="160" cy="166" rx="1.2" ry="1.2" fill="#222"/>
        <ellipse cx="157" cy="172" rx="1.2" ry="1.2" fill="#222"/>
        <ellipse cx="163" cy="172" rx="1.2" ry="1.2" fill="#222"/>
        <!-- 狗狗头 -->
        <ellipse cx="110" cy="110" rx="32" ry="28" fill="#fff"/>
        <!-- 耳朵 -->
        <ellipse cx="85" cy="110" rx="8" ry="16" fill="#222"/>
        <ellipse cx="135" cy="110" rx="8" ry="16" fill="#222"/>
        <!-- 狗狗五官 -->
        <circle cx="110" cy="120" r="2.5" fill="#222"/>
        <ellipse cx="100" cy="115" rx="2.5" ry="2.5" fill="#222"/>
        <ellipse cx="120" cy="115" rx="2.5" ry="2.5" fill="#222"/>
        <!-- 狗狗帽子 -->
        <polygon points="110,85 120,105 100,105" fill="#ffd1e3" stroke="#ffb347" stroke-width="2"/>
        <circle cx="110" cy="82" r="4" fill="#ffd1e3" stroke="#ffb347" stroke-width="2"/>
        <!-- 蜡烛 -->
        <rect x="108" y="70" width="4" height="18" rx="2" fill="#fff" stroke="#ffb347" stroke-width="1"/>
        <!-- 火焰 -->
        <ellipse id="candle-flame" class="candle-flame" cx="110" cy="68" rx="5" ry="8" fill="gold"/>
      </svg>
    `;
  });

  // 吹蜡烛按钮逻辑
  setTimeout(() => {
    const blowBtn = document.getElementById('blow-btn');
    if (blowBtn) {
      blowBtn.onclick = function() {
        const flame = document.getElementById('candle-flame');
        if (flame) flame.style.display = 'none';
        // 蛋糕和按钮隐藏，显示祝福语和图片
        document.querySelector('.cake-area').style.display = 'none';
        document.querySelector('.wish-text-img-area').style.display = 'block';
        document.getElementById('big-wish-text').innerText = '天天开心 永远做自己的太阳';
        // 点击祝福语或图片，切换到最后祝福语
        const wishArea = document.querySelector('.wish-text-img-area');
        wishArea.onclick = function() {
          wishArea.style.display = 'none';
          document.querySelector('.final-outro-area').style.display = 'block';
        };
      };
    }
  }, 1000);

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    // 隐藏所有自定义区域，重置动画
    document.querySelector('.cake-area').style.display = 'none';
    document.querySelector('.wish-text-img-area').style.display = 'none';
    document.querySelector('.final-outro-area').style.display = 'none';
    tl.restart();
  });
};

// Run fetch and animation in sequence
fetchData();

// 保证图片路径正确，自动同步customize.json的imagePath
fetch("customize.json").then(r=>r.json()).then(data=>{
  var img = document.getElementById('wish-img');
  if(img && data.imagePath){
    img.src = data.imagePath;
  }
});

// 优化蛋糕出现时机：SO动画后立即出现
// 找到SO动画后，提前插入tl.call(() => { ... })，让蛋糕更早显示