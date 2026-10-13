/* ==========================================================
   CONFIG — chỉ cần sửa file này, không cần đụng vào index.html
   • Chữ trong "..." hoặc '...' là nội dung bạn sửa.
   • Muốn THÊM mục: copy nguyên một khối { ... }, dán thêm bên dưới, nhớ có dấu phẩy.
   • Muốn XÓA mục: xóa cả khối { ... } đó.
   • Ảnh: bỏ file vào cùng thư mục (hoặc thư mục ./images) rồi ghi đường dẫn.
   • Trong đoạn văn, bọc **chữ** để tô nổi bật.
   ========================================================== */
export default {

  name: 'La Minh Khánh',            // tên gõ chạy trong bio
  tabTitle: 'Who?',   // tiêu đề tab trình duyệt

  theme: {
    accent: '#ff8fbf'               // màu nhấn (hex). Thử: #7cc4ff, #ffd36e, #9bff9b
  },

  /* ---------- Cảnh 3D ---------- */
  scene: {
    panorama: './panorama.jpg',     // ảnh 360° (tỉ lệ 2:1)
    font: './Quicksand.ttf',        // file font .ttf cho chữ 3D (thiếu thì tự tải online)
    text: 'La Minh Khánh <3',       // dòng chữ 3D
    size: 2.3,                      // cỡ chữ
    depth: 0.5,                     // độ dày chữ
    spin: 0.20,                     // tốc độ xoay (0 = đứng yên)
    screenFraction: 0.58,           // chữ chiếm bao nhiêu bề ngang màn hình
    faceColor: '#fff6fb',           // màu mặt chữ
    edgeColor: '#86e6ff'            // màu viền chữ
  },

  ui: {
    buttonLabel: 'Click here !',
    hint: 'Bấm ✕ hoặc ESC để quay lại'
  },

  /* ---------- Nhạc nền ---------- */
  audio: {
    enabled: true,                  // false = tắt hẳn nhạc
    src: './audio.mp3',             // file nhạc (đặt cùng thư mục)
    volume: 0.6,                    // 0 → 1
    loop: true                      // lặp lại khi hết bài
  },

  /* ---------- Cột trái ---------- */
  avatar: './avatar.jpg',
  role: 'Học sinh lớp 10A8 THPT Hoành Bồ',
  note: '↖ cái web này mình tự code đó =)',   // dòng chữ viết tay (để '' nếu không muốn)

  clock: { show: true, timezone: 'Asia/Ho_Chi_Minh', label: 'Giờ ở chỗ mình' },

  socials: [
    { label: 'GitHub',   url: 'https://github.com/khanh-lol/' },
    { label: 'Email',    url: 'lmkhanh@gmail.com' }
  ],

  stats: [
    { value: 2,  label: 'dự án chưa xong' },
    { value: 5,  label: 'công cụ hay dùng' },
    { value: 14, label: 'tiếng mỗi ngày' }
  ],

  /* ---------- Cột phải ---------- */
  // Mỗi phần là một tab, theo thứ tự này. Xóa tên nào thì tab đó biến mất.
  sections: ['about', 'projects', 'timeline', 'gallery', 'skills'],

  about: {
    title: 'Về mình',
    text: [
      'Mình là ** La Minh Khánh**. Học sinh có hứng thú với môn tin học, công nghệ thông tin và tự động hóa ',
      'Phát triển bản thân, rèn luyện sức khỏe và cống hiến cho đất nước !'
    ]
  },

  projects: {
    title: 'Mình đã làm',
    items: [
      { name: 'Website tự động gọi học sinh', desc: 'Đc các cô tin dùng-)',
        tag: 'html', image: '1.png', link: 'https://10a8.vercel.app' },
      { name: 'Bot discord', desc: 'Bot tự động giúp quản lí server',
        tag: 'Python', image: '2.png', link: '' }
      // thêm dự án: { name:'...', desc:'...', tag:'...', image:'./images/xxx.jpg', link:'https://...' },
    ]
  },

  timeline: {
    title: 'Hành trình',
    items: [
      { year: '2024', title: 'Chập chững', desc: 'Viết những đoạn mã scartch đầu tiên.' },
      { year: '2025', title: 'Làm quen với python', desc: 'Học python toàn để viết chơi=)' },
      { year: '2025', title: 'Học ngôn ngữ c++ với bộ 3 ngôn ngữ lập trình website', desc: 'Cảm giác mới lạ nhưng cũng hay' }
    ]
  },

  gallery: {
    title: 'Ảnh',
    max: 6,                         // hiện tối đa bao nhiêu ảnh (để vừa màn hình)
    // để trống [] thì phần này tự ẩn. Ảnh không tồn tại sẽ tự bị bỏ qua.
    items: [
      // { src: './images/a.jpg', caption: 'Góc làm việc' },
      // { src: './images/b.jpg', caption: 'Chuyến đi hè' },
    ]
  },

  skills: {
    title: 'Đồ nghề',
    items: ['HTML', 'CSS', 'JavaScript', 'C++', 'Python']
  }
};
