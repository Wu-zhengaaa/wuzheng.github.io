// 初始化粒子背景
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00f3ff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f3ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    },
    retina_detect: true
});

// 3D徽章旋转效果
let scene, camera, renderer, badge;

function init3DBadge() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('badge-canvas'),
        alpha: true
    });
    renderer.setSize(200, 200);
    
    // 创建徽章几何体（这里用一个简单的八边形示例）
    const geometry = new THREE.OctahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00f3ff,
        shininess: 100
    });
    
    badge = new THREE.Mesh(geometry, material);
    scene.add(badge);
    
    // 添加光源
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    
    camera.position.z = 5;
    
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    badge.rotation.x += 0.01;
    badge.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    init3DBadge();
    
    // 延迟加载粒子效果
    setTimeout(() => {
        // 初始化粒子背景
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00f3ff"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00f3ff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }, 1000);
    
    // 战斗记录按钮点击事件
    document.querySelector('.pulse-button').addEventListener('click', () => {
        document.querySelector('#stats').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// 深夜模式
function checkNightMode() {
    const hour = new Date().getHours();
    if (hour >= 22 || hour < 8) {
        document.body.style.opacity = '0.7';
    } else {
        document.body.style.opacity = '1';
    }
}

setInterval(checkNightMode, 1000 * 60); // 每分钟检查一次
checkNightMode(); // 初始检查

// 初始化Swiper
const highlightsSwiper = new Swiper('.highlights-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// 视频播放控制
document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('video');
    const playBtn = container.querySelector('.play-btn');
    const overlay = container.querySelector('.video-overlay');

    // 获取模态窗口元素
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close-modal');

    playBtn.addEventListener('click', () => {
        // 设置模态窗口视频源
        modalVideo.src = video.querySelector('source').src;
        // 显示模态窗口
        modal.style.display = 'flex';
        // 播放视频
        modalVideo.play();
    });

    // 关闭模态窗口
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = '';
    });

    // 点击模态窗口外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalVideo.pause();
            modalVideo.src = '';
        }
    });
});

// 背景视差效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bgImage = document.querySelector('.bg-image');
    bgImage.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0) scale(1.1)`;
});

// 鼠标移动视差效果
document.addEventListener('mousemove', (e) => {
    const bgImage = document.querySelector('.bg-image');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    bgImage.style.transform = `
        translate3d(${mouseX * 20}px, ${mouseY * 20}px, 0) 
        scale(1.1)
    `;
});

// 图片预览控制
document.querySelectorAll('.stats-item').forEach(item => {
    const img = item.querySelector('.stats-image');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

// 获取微信二维码模态窗口
const weixinModal = document.getElementById('weixinModal');

// 点击任意位置关闭微信二维码
weixinModal.addEventListener('click', () => {
    weixinModal.style.display = 'none';
});

// 微信图标点击事件
document.querySelector('.social-icon.wechat').addEventListener('click', () => {
    weixinModal.style.display = 'flex';
});

// 服务咨询按钮点击事件
document.querySelector('.contact-btn').addEventListener('click', () => {
    weixinModal.style.display = 'flex';
});

// 延迟加载视频
function lazyLoadVideos() {
    document.querySelectorAll('source[data-src]').forEach(source => {
        source.src = source.dataset.src;
        source.removeAttribute('data-src');
        source.parentElement.load();
    });
}

// 当用户滚动到视频区域时才加载视频
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lazyLoadVideos();
            observer.disconnect();
        }
    });
});

document.querySelectorAll('.highlights-section').forEach(section => {
    observer.observe(section);
});

// 图片懒加载
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
}); 