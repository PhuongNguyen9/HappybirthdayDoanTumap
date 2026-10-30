
const photoFiles = [
"assets/photos/album-01.jpg",
"assets/photos/album-02.jpg",
"assets/photos/album-03.jpg",
"assets/photos/album-04.jpg",
"assets/photos/album-05.jpg",
"assets/photos/album-06.jpg",
"assets/photos/album-07.jpg",
"assets/photos/album-08.jpg",
"assets/photos/album-09.jpg",
"assets/photos/album-10.jpg",
"assets/photos/album-11.jpg",
"assets/photos/album-12.jpg",
"assets/photos/album-13.jpg",
"assets/photos/album-14.jpg",
"assets/photos/album-15.jpg",
"assets/photos/album-16.jpg",
"assets/photos/album-17.jpg",
"assets/photos/album-18.jpg",
"assets/photos/album-19.jpg",
"assets/photos/album-20.jpg",
"assets/photos/album-21.jpg",
"assets/photos/album-22.jpg",
"assets/photos/album-23.jpg",
"assets/photos/album-24.jpg",
"assets/photos/album-25.jpg",
"assets/photos/album-26.jpg",
"assets/photos/album-27.jpg",
"assets/photos/album-28.jpg",
"assets/photos/album-29.jpg",
"assets/photos/album-30.jpg",
"assets/photos/album-31.jpg",
"assets/photos/album-32.jpg",
"assets/photos/album-33.jpg",
"assets/photos/album-34.jpg",
"assets/photos/album-35.jpg",
"assets/photos/album-36.jpg",
"assets/photos/album-37.jpg",
"assets/photos/album-38.jpg",
"assets/photos/album-39.jpg",
"assets/photos/album-40.jpg",
"assets/photos/album-41.jpg",
"assets/photos/album-42.jpg",
"assets/photos/album-43.jpg",
"assets/photos/album-44.jpg",
"assets/photos/album-45.jpg",
"assets/photos/album-46.jpg",
"assets/photos/album-47.jpg",
"assets/photos/album-48.jpg",
"assets/photos/album-49.jpg",
"assets/photos/album-50.jpg",
"assets/photos/album-51.jpg",
"assets/photos/album-52.jpg",
"assets/photos/album-53.jpg",
"assets/photos/album-54.jpg",
"assets/photos/album-55.jpg",
"assets/photos/album-56.jpg",
"assets/photos/album-57.jpg",
"assets/photos/album-58.jpg",
"assets/photos/album-59.jpg",
"assets/photos/album-60.jpg",
"assets/photos/album-61.jpg",
"assets/photos/album-62.jpg",
"assets/photos/album-63.jpg",
"assets/photos/album-64.jpg",
"assets/photos/album-65.jpg",
"assets/photos/album-66.jpg",
"assets/photos/album-67.jpg"
];
const gallery=document.getElementById('galleryGrid');
const galleryPagination=document.getElementById('galleryPagination');
// Phân loại theo nội dung thật của ảnh: mèo, couple, và những ngày thường/chuyến đi.
const atlasZones=[
 {ids:[1, 4, 10, 12, 13, 16, 18, 19, 21, 26, 27, 28, 30, 31, 33, 35, 38, 40, 42, 43, 45, 46, 48, 51, 52, 56, 57, 58, 59, 61, 62, 64, 65],label:'COORDINATE 01 · LITTLE ADVENTURES & EVERYDAY',title:'Những chuyến đi & ngày thường'},
 {ids:[3, 5, 7, 8, 14, 15, 20, 24, 25, 29, 36, 37, 39, 44, 49, 53, 54, 55, 60],label:'COORDINATE 02 · BO & LỰU',title:'Bo & Lựu'},
 {ids:[2, 6, 9, 11, 17, 22, 23, 32, 34, 41, 47, 50, 63, 66, 67],label:'COORDINATE 03 · OUR MOMENTS',title:'Chuyện của hai đứa mình'}
];
let galleryPage=1,activeAtlasZone=0;
const galleryPageSize=9;
function renderGallery(){
 const zone=atlasZones[activeAtlasZone],items=zone.ids.map(n=>({n,src:photoFiles[n-1]}));
 const total=Math.ceil(items.length/galleryPageSize),begin=(galleryPage-1)*galleryPageSize;
 document.getElementById('atlasCurrentLabel').textContent=zone.label;
 document.getElementById('atlasCurrentCount').textContent=`${items.length} KỶ NIỆM`;
 gallery.innerHTML='';
 items.slice(begin,begin+galleryPageSize).forEach((item,i)=>{
  const {n:num,src}=item,f=document.createElement('figure');
  f.className='gallery-item atlas-photo atlas-photo-'+((num%5)+1);
  const caption=activeAtlasZone===1?'Một khoảnh khắc cùng Bo hoặc Lựu':activeAtlasZone===2?'Một mảnh chuyện của chúng mình':'Một ngày để nhớ';
  f.innerHTML=`<div class="atlas-photo-pin">✦</div><img loading="lazy" src="${src}" alt="${caption}"><figcaption><span>MEMORY ${String(num).padStart(2,'0')}</span><b>${caption}</b></figcaption>`;
  f.addEventListener('click',()=>{document.getElementById('lightboxImg').src=src;document.getElementById('lightboxCaption').textContent=`Memory ${String(num).padStart(2,'0')} · ${caption}`;document.getElementById('lightbox').hidden=false});
  gallery.appendChild(f);
 });
 galleryPagination.innerHTML='';
 for(let page=1;page<=total;page++){
  const btn=document.createElement('button');btn.textContent=page;btn.className=page===galleryPage?'active':'';
  btn.setAttribute('aria-label','Trang '+page);btn.onclick=()=>{galleryPage=page;renderGallery();document.getElementById('gallery').scrollIntoView({behavior:'smooth',block:'start'});};
  galleryPagination.appendChild(btn);
 }
}
document.querySelectorAll('.atlas-zone').forEach(btn=>btn.addEventListener('click',()=>{
 activeAtlasZone=Number(btn.dataset.zone);galleryPage=1;
 document.querySelectorAll('.atlas-zone').forEach(x=>x.classList.toggle('active',x===btn));
 renderGallery();
}));
renderGallery();
document.getElementById('closeLightbox').onclick=()=>document.getElementById('lightbox').hidden=true;
document.getElementById('lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')e.currentTarget.hidden=true});

// Couple Quest — sáu câu vui nhộn, câu kỹ thuật là Easter egg cuối.
// Mode 01 — Cat QA by Bo & Lựu.
const catQs=[
{q:"Bo muốn ăn nhưng chưa cần kêu meo ngay. Dấu hiệu đặc trưng nào sẽ xuất hiện trước?",a:["Bắt đầu nheo mắt nhìn con sen 👀","Lặng lẽ đi lấy remote","Nằm lên chăn rồi giả vờ ngủ"],c:0,ok:"Chuẩn luôn! Đôi mắt nheo nheo chính là tín hiệu gọi món của Bo. Con sen phải nhận ra ngay! 🧡"},
{q:"Khi Bo bắt đầu nheo mắt như vậy, thông điệp thật sự là gì?",a:["Đang kiểm tra ánh sáng trong phòng.","Đến giờ phục vụ đồ ăn rồi đó!","Boss đang chuẩn bị ngủ đông."],c:1,ok:"Đúng tín hiệu rồi! Bo không cần mở ticket, chỉ cần ánh mắt là đủ tạo incident đói bụng. 😹"},
{q:"Đến giờ ngủ, đâu là chiếc 'giường' Lựu yêu thích?",a:["Thùng carton mới khui","Ngay trên chăn 🛏️","Bàn phím máy tính"],c:1,ok:"Chính xác! Lựu thích nằm lên chăn khi ngủ. Chăn đã được chọn làm vùng an toàn của boss. 💤"},
{q:"Nếu thấy một bé mèo cuộn tròn ngủ ngon lành trên chăn, ai có khả năng đang chiếm chỗ?",a:["Bo đang chờ đồ ăn","Lựu đang tận hưởng chiếc chăn","Nhân viên kỹ thuật đang trực ca"],c:1,ok:"Lựu detected! Không làm phiền giấc ngủ của boss nha. 💗"},
{q:"FINAL CAT QA · Bo đang nheo mắt đòi ăn, còn Lựu đang ngủ trên chăn. Phương án vận hành chuẩn nhất?",a:["Đánh thức Lựu để họp khẩn.","Cho Bo ăn, giữ yên giấc ngủ cho Lựu — xử lý đúng nhu cầu từng boss.","Báo cả hai tự tạo ticket."],c:1,ok:"CAT QA APPROVED! Bin hiểu đúng tín hiệu của Bo và biết tôn trọng giờ ngủ của Lựu. Hai boss duyệt! 🐾"}
];
let cq=0,catAnswered=false,catDone=false,netDone=false;
function showCatQ(){
 const q=catQs[cq],box=document.getElementById('catAnswers');
 document.getElementById('catStep').textContent=String(cq+1).padStart(2,'0')+' / 05';
 document.getElementById('catQuestion').textContent=q.q;
 document.getElementById('questBadge').textContent='CAT QA · CASE '+String(cq+1).padStart(2,'0');
 document.getElementById('questProgressFill').style.width=(cq/5*100)+'%';
 document.getElementById('catFeedback').textContent='';
 document.getElementById('catNext').hidden=true;box.innerHTML='';catAnswered=false;
 q.a.forEach((t,i)=>{
  const btn=document.createElement('button');btn.textContent=t;
  btn.addEventListener('click',()=>{
   if(catAnswered)return;
   if(i!==q.c){document.getElementById('catFeedback').textContent=['Chưa qua vòng kiểm định của boss. Thử lại nha!','Hai chiếc tai mèo vừa xoay về phía bà đó. Suy nghĩ thêm!','Sai một chút thôi, hội đồng vẫn cho làm lại. 😼'][cq];btn.classList.add('wrong-answer');return;}
   catAnswered=true;[...box.children].forEach(x=>x.disabled=true);btn.classList.add('correct-answer');
   document.getElementById('catFeedback').textContent=q.ok;
   document.getElementById('stamp'+(cq+1)).classList.add('earned');
   document.getElementById('questProgressFill').style.width=((cq+1)/5*100)+'%';
   document.getElementById('catNext').hidden=false;
  });box.appendChild(btn);
 });
}
showCatQ();
document.getElementById('catNext').onclick=()=>{
 cq++;
 if(cq>=catQs.length){
  catDone=true;document.getElementById('catQuiz').hidden=true;document.getElementById('catQaDone').hidden=false;checkQuestComplete();
 }else showCatQ();
};

// Mode 02 — Network Ops: three incident tickets with diagnostic reasoning.
const netTickets=[
{tag:"SITE SURVEY · SUBNET PLANNING",scenario:"Ticket #SITE-201 · Nhà hàng mới có 3 khu: POS/thu ngân (12 thiết bị), nhân viên (18 thiết bị), Wi‑Fi khách (dự kiến 40 thiết bị). Router LAN dùng gateway 192.168.10.1. Yêu cầu: khách không được truy cập POS.",question:"Thiết kế nào hợp lý nhất trước khi triển khai?",answers:["Dùng chung subnet /24, tách tên Wi‑Fi và giới hạn tốc độ cho từng nhóm thiết bị.","Tách VLAN/subnet POS, staff, guest; gateway riêng và ACL chặn guest vào POS.","Tạo ba SSID riêng nhưng cùng VLAN, rồi dùng mật khẩu để phân biệt quyền truy cập."],correct:1,explain:"Đúng hướng triển khai! Tách VLAN và subnet theo nhóm thiết bị để cô lập broadcast và kiểm soát truy cập. Tính host thực tế (kèm tăng trưởng), gán gateway/SVI hoặc sub-interface riêng, DHCP scope riêng và ACL/firewall chặn guest tới POS; chỉ mở các luồng cần thiết."},
{tag:"SWITCHING · ACCESS / TRUNK",scenario:"Ticket #SITE-202 · Tại nhà hàng, POS cắm vào port 1/0/8 thuộc VLAN 20 hoạt động bình thường. AP ở port 1/0/24 phát SSID Staff (VLAN 30) và Guest (VLAN 40), nhưng client Guest lại nhận IP của VLAN 30.",question:"Bạn kiểm tra cấu hình nào trên đường kết nối AP?",answers:["Kiểm tra switchport nối AP: trunk/access, VLAN được phép và native VLAN hai đầu.","Đổi DNS của scope Guest sang DNS public rồi renew IP trên một thiết bị thử.","Chuyển uplink AP sang access VLAN 40 để SSID Guest nhận đúng dải IP."],correct:0,explain:"Chuẩn! AP mang nhiều SSID/VLAN thường cần uplink trunk (tùy model/cách triển khai). Kiểm tra tagging VLAN trên SSID, switchport mode trunk, allowed VLAN 30/40 và native VLAN khớp hai đầu. Không biến uplink đa VLAN thành access port."},
{tag:"FACTORY · DHCP / ADDRESS POOL",scenario:"Ticket #SITE-203 · Nhà máy có VLAN 50 cho thiết bị handheld và máy quét mã vạch. Ca chiều thường có thêm thiết bị thuê ngoài; một số máy báo 'Obtaining IP address' rồi tự nhận 169.254.x.x. Gateway là 10.50.0.1/26.",question:"Nguyên nhân nào nên được xác minh trước?",answers:["Kiểm tra DNS forwarder và bản ghi tên máy của các handheld đang gặp lỗi.","Kiểm tra pool DHCP /26 còn IP trống, lease cũ và relay nếu server ở VLAN khác.","Tăng lease time lên vài ngày để thiết bị ít phải gửi yêu cầu cấp IP hơn."],correct:1,explain:"Đúng! /26 chỉ có 62 địa chỉ host usable (trong subnet thông thường). Đối chiếu số thiết bị đồng thời, DHCP pool, lease/exclusion và log cấp phát; nếu thiếu thật, đề xuất subnet/VLAN phù hợp sau khi rà soát IP plan. Nếu server khác subnet, kiểm tra DHCP relay."},
{tag:"FACTORY · ROUTING / ACL",scenario:"Ticket #SITE-204 · Máy giám sát ở VLAN 60 (10.60.0.0/24) cần gửi dữ liệu tới server SCADA 10.80.5.20 qua core switch. Ping gateway hai VLAN được, nhưng TCP 502 không kết nối. Các VLAN khác vẫn hoạt động.",question:"Thứ tự khoanh vùng nào phù hợp nhất?",answers:["Đối chiếu route hai chiều, ACL/firewall cho TCP 502 và log drop tại điểm chặn.","Đổi VLAN 60 sang subnet /23 để có thêm địa chỉ cho thiết bị giám sát.","Restart core switch và server SCADA để làm mới trạng thái kết nối hiện tại."],correct:0,explain:"Ticket resolved! Ping gateway chỉ xác nhận kết nối tới gateway, chưa chứng minh luồng tới SCADA được phép. Kiểm tra route hai chiều, ACL/firewall cho TCP 502, log drop và listener/service phía SCADA; chỉ mở đúng source/destination/port được phê duyệt."}
];
let ni=0,netAnswered=false;
function renderNetTicket(){
 const t=netTickets[ni],box=document.getElementById('netAnswers');
 document.getElementById('netStep').textContent='TICKET '+String(ni+1).padStart(2,'0')+' / 04';
 document.getElementById('netBadge').textContent=t.tag;
 document.getElementById('netScenario').textContent=t.scenario;
 document.getElementById('netFeedback').textContent='';
 document.getElementById('netNext').hidden=true;box.innerHTML='';netAnswered=false;
 t.answers.forEach((answer,i)=>{
  const btn=document.createElement('button');btn.textContent=answer;
  btn.addEventListener('click',()=>{
   if(netAnswered)return;
   if(i!==t.correct){document.getElementById('netFeedback').textContent='Chưa đóng ticket được đâu. Hãy chọn bước chẩn đoán ít rủi ro và có khả năng khoanh vùng tốt hơn.';btn.classList.add('wrong-answer');return;}
   netAnswered=true;[...box.children].forEach(x=>x.disabled=true);btn.classList.add('correct-answer');
   document.getElementById('netFeedback').textContent=t.explain;
   document.getElementById('netStamp'+(ni+1)).classList.add('earned');
   document.getElementById('netProgressFill').style.width=((ni+1)/4*100)+'%';
   document.getElementById('netNext').hidden=false;
  });box.appendChild(btn);
 });
}
renderNetTicket();
document.getElementById('netNext').onclick=()=>{
 ni++;
 if(ni>=netTickets.length){
  netDone=true;document.getElementById('networkGame').hidden=true;document.getElementById('netDone').hidden=false;checkQuestComplete();
 }else renderNetTicket();
};
function checkQuestComplete(){
 if(!catDone||!netDone)return;
 document.getElementById('qaGate').hidden=false;
 document.getElementById('cats').hidden=false;
 document.getElementById('qaGate').scrollIntoView({behavior:'smooth',block:'center'});
}
if(sessionStorage.getItem('birthdayPuzzleCompleted')==='yes'){
 document.getElementById('cats').hidden=false;
 document.getElementById('catReward').hidden=false;
 const workspace=document.querySelector('.puzzle-workspace');if(workspace)workspace.hidden=true;
}
if(sessionStorage.getItem('birthdayCakeBlown')==='yes')document.getElementById('final').hidden=false;

// Memory Jigsaw — tap each square to rotate Bo's photo back into place.
const jigsawImage='assets/photos/bo-birthday-puzzle.jpg';
const jigsawBoard=document.getElementById('jigsawBoard');
const puzzleSize=3,totalTiles=9;
let tileRotations=Array(totalTiles).fill(0),rotateCount=0,jigsawSolved=false;
function countOriented(){return tileRotations.filter(rotation=>rotation===0).length;}
function updatePuzzleStatus(){
 document.getElementById('jigsawStatus').textContent=`Mảnh đúng chiều: ${countOriented()} / 9 · Số lượt xoay: ${rotateCount}`;
}
function finishJigsaw(){
 jigsawSolved=true;
 const rank=rotateCount<=13?'GOLD SOLVER':rotateCount<=19?'SILVER SOLVER':'MEMORY MASTER';
 document.getElementById('jigsawFeedback').textContent=`Bo đã trở lại đúng chiều sau ${rotateCount} lượt xoay — ${rank}!`;
 document.getElementById('jigsawReveal').hidden=false;
 document.getElementById('jigsawRank').textContent=rank;
 document.getElementById('jigsawMovesFinal').textContent=rotateCount+' lượt xoay';
 sessionStorage.setItem('birthdayPuzzleCompleted','yes');
 document.getElementById('catReward').hidden=false;
 document.getElementById('catReward').scrollIntoView({behavior:'smooth',block:'center'});
}
function renderTiles(){
 jigsawBoard.innerHTML='';
 tileRotations.forEach((rotation,index)=>{
  const tile=document.createElement('button');tile.type='button';
  tile.className='jigsaw-tile rotation-tile'+(rotation===0?' tile-correct':'');
  tile.style.backgroundImage=`url("${jigsawImage}")`;
  const row=Math.floor(index/puzzleSize),col=index%puzzleSize;
  tile.style.backgroundPosition=`${col*100/2}% ${row*100/2}%`;
  tile.style.transform=`rotate(${rotation*90}deg)`;
  tile.setAttribute('aria-label',`Mảnh ${index+1}, đang xoay ${rotation*90} độ. Nhấn để xoay 90 độ`);
  tile.innerHTML=`<span>${index+1}</span>`;
  tile.querySelector('span').style.transform=`rotate(${-rotation*90}deg)`;
  tile.disabled=jigsawSolved||rotation===0;
  tile.addEventListener('click',()=>rotateTile(index));
  jigsawBoard.appendChild(tile);
 });
}
function rotateTile(index){
 if(jigsawSolved||tileRotations[index]===0)return;
 tileRotations[index]=(tileRotations[index]+1)%4;
 rotateCount++;
 renderTiles();updatePuzzleStatus();
 if(tileRotations.every(rotation=>rotation===0))finishJigsaw();
 else document.getElementById('jigsawFeedback').textContent='Đúng rồi! Quan sát đường nét giữa các mảnh để tìm hướng chuẩn nha.';
}
function shuffleTiles(){
 tileRotations=Array.from({length:totalTiles},()=>1+Math.floor(Math.random()*3));
 if(tileRotations.every(rotation=>rotation===0))tileRotations[0]=1;
 rotateCount=0;jigsawSolved=false;
 document.getElementById('jigsawReveal').hidden=true;
 document.getElementById('jigsawFeedback').textContent='Mỗi mảnh đang bị xoay lệch 90°, 180° hoặc 270°. Nhấn vào mảnh để xoay từng bước!';
 updatePuzzleStatus();renderTiles();
}
document.getElementById('jigsawShuffle').addEventListener('click',shuffleTiles);
if(sessionStorage.getItem('birthdayPuzzleCompleted')==='yes'){
 tileRotations=Array(totalTiles).fill(0);jigsawSolved=true;renderTiles();updatePuzzleStatus();
 document.getElementById('jigsawFeedback').textContent='Ảnh Bo đã được khôi phục trong lượt chơi trước.';
 document.getElementById('jigsawReveal').hidden=false;
 document.getElementById('catReward').hidden=false;
}else shuffleTiles();

// Mật mã lá thư: chấp nhận "Bo Mập", "bo map", "BOMAP"...
const passwordInput=document.getElementById('password');
const unlockButton=document.getElementById('unlockBtn');
const unlockMessage=document.getElementById('unlockMsg');
const secretLetter=document.getElementById('secretLetter');
const normalizeBirthdayPassword=value=>String(value||'')
 .normalize('NFD')
 .replace(/[\u0300-\u036f]/g,'')
 .replace(/đ/g,'d').replace(/Đ/g,'D')
 .toLowerCase()
 .replace(/[^a-z0-9]/g,'');
function unlockBirthdayLetter(){
 const entered=normalizeBirthdayPassword(passwordInput.value);
 if(entered==='bomap'){
  unlockMessage.textContent='Mật mã chính xác. Lá thư này là dành cho anh. ♡';
  unlockMessage.classList.add('success');
  secretLetter.hidden=false;
  document.getElementById('finalSurprise').hidden=false;
  passwordInput.disabled=true;
  unlockButton.disabled=true;
  unlockButton.textContent='Đã mở thư ♡';
  // Hạ nhạc thật chậm để tạo khoảng lặng khi đọc thư.
  if(typeof window.fadeBirthdayMusic==='function')window.fadeBirthdayMusic(0.18,2200);
  secretLetter.scrollIntoView({behavior:'smooth',block:'center'});
 }else{
  unlockMessage.textContent='Chưa đúng rồi nè. Thử lại biệt danh thân quen mà anh hay được gọi nhé! 😼';
  unlockMessage.classList.remove('success');
  passwordInput.focus();
  passwordInput.select();
 }
}
unlockButton.addEventListener('click',unlockBirthdayLetter);
passwordInput.addEventListener('keydown',e=>{if(e.key==='Enter')unlockBirthdayLetter()});

// Nhạc nền trang chính: tự phát khi có thể, vẫn giữ nút bật/tắt.
const soundtrack=document.getElementById('soundtrack'),musicBtn=document.getElementById('musicBtn');
if(soundtrack&&musicBtn){
 const resumeAt=sessionStorage.getItem('birthdayMainMusicTime');
 const savedPreference=sessionStorage.getItem('birthdayMainMusicPlaying');
 let autoplayBlocked=false,fadeFrame=0;
 soundtrack.volume=0.42;
 if(resumeAt!==null){
  soundtrack.addEventListener('loadedmetadata',()=>{
   try{soundtrack.currentTime=Math.min(Number(resumeAt)||0,Math.max(0,soundtrack.duration-1));}catch(e){}
  },{once:true});
 }
 const syncMusicLabel=()=>{
  musicBtn.innerHTML=soundtrack.paused
   ?(autoplayBlocked?'♫ <span>Chạm để nghe nhạc</span>':'♫ <span>Bật nhạc</span>')
   :'♫ <span>Tắt nhạc</span>';
 };

 let videoMusicWasPlaying=false;
 window.pauseBirthdayMusicForVideo=()=>{
  videoMusicWasPlaying=!!(soundtrack&&!soundtrack.paused);
  if(videoMusicWasPlaying){
   soundtrack.pause();
   syncMusicLabel();
  }
 };
 window.resumeBirthdayMusicAfterVideo=async()=>{
  if(!videoMusicWasPlaying)return;
  videoMusicWasPlaying=false;
  if(sessionStorage.getItem('birthdayMainMusicPlaying')==='no')return;
  try{
   await soundtrack.play();
   syncMusicLabel();
  }catch(e){
   // Keep the music button available if the browser requires another gesture.
   syncMusicLabel();
  }
 };
 window.fadeBirthdayMusic=(target=0.18,duration=2000)=>{
  if(fadeFrame)cancelAnimationFrame(fadeFrame);
  const start=soundtrack.volume,started=performance.now();
  const step=now=>{
   const progress=Math.min(1,(now-started)/duration);
   const eased=progress*progress*(3-2*progress);
   soundtrack.volume=Math.max(0,Math.min(1,start+(target-start)*eased));
   if(progress<1)fadeFrame=requestAnimationFrame(step);else fadeFrame=0;
  };
  fadeFrame=requestAnimationFrame(step);
 };
 const startMusic=async()=>{
  try{
   await soundtrack.play();
   autoplayBlocked=false;
   sessionStorage.setItem('birthdayMainMusicPlaying','yes');
   syncMusicLabel();
   return true;
  }catch(e){
   autoplayBlocked=true;
   syncMusicLabel();
   return false;
  }
 };
 const shouldAutoplay=savedPreference!=='no';
 if(shouldAutoplay){
  // Browsers may block audible autoplay; retry after the first real user interaction.
  startMusic().then(ok=>{
   if(!ok){
    const resumeAfterGesture=event=>{
     if(event.target===musicBtn||event.target.closest?.('#musicBtn'))return;
     startMusic();
     document.removeEventListener('pointerdown',resumeAfterGesture,true);
     document.removeEventListener('keydown',resumeAfterGesture,true);
    };
    document.addEventListener('pointerdown',resumeAfterGesture,true);
    document.addEventListener('keydown',resumeAfterGesture,true);
    document.addEventListener('pointerdown',resumeAfterGesture,true);
    document.addEventListener('keydown',resumeAfterGesture,true);
   }
  });
 }else{
  soundtrack.pause();
  syncMusicLabel();
 }
 musicBtn.onclick=async()=>{
  if(soundtrack.paused){
   await startMusic();
  }else{
   soundtrack.pause();
   sessionStorage.setItem('birthdayMainMusicPlaying','no');
   syncMusicLabel();
  }
 };
 window.addEventListener('pagehide',()=>{
  sessionStorage.setItem('birthdayMainMusicTime',String(soundtrack.currentTime||0));
  if(!soundtrack.paused)sessionStorage.setItem('birthdayMainMusicPlaying','yes');
 });
}
const st=document.createElement('style');st.textContent="@keyframes fall{to{transform:translateY(110vh) rotate(500deg);opacity:0}}";document.head.appendChild(st);

// Mèo cameo bay ngang và thỉnh thoảng thả một câu meme nhỏ.
const catMemeLines=['Sen ơi, tới giờ phát đồ ăn!','Boss đã kiểm tra, mọi thứ tạm ổn.','Không có bug nào lớn hơn cơn đói.','Meo một tiếng, deploy một niềm vui!'];
let memeIndex=0;
window.setInterval(()=>{const old=document.querySelector('.cat-pop');if(old)old.remove();const tag=document.createElement('div');tag.className='cat-pop';tag.textContent='🐾 '+catMemeLines[memeIndex%catMemeLines.length];document.body.appendChild(tag);memeIndex++;setTimeout(()=>tag.remove(),3600)},12500);


// Pháo hoa xuất hiện ngẫu nhiên: vài chùm nhỏ, rồi nghỉ để tạo bất ngờ.
(function birthdayFireworks(){
 const canvas=document.getElementById('fireworksCanvas');
 if(!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 const ctx=canvas.getContext('2d'); let w=0,h=0,particles=[],raf=0;
 const colors=['#f4bd62','#ff8066','#f8e7a1','#9ed8c1','#d9b7ff','#ffffff'];
 function resize(){const dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}
 addEventListener('resize',resize);resize();
 function burst(x,y){
  const color=colors[Math.floor(Math.random()*colors.length)];
  const count=38+Math.floor(Math.random()*22);
  for(let i=0;i<count;i++){const a=Math.PI*2*i/count, speed=1.1+Math.random()*3.1;
   particles.push({x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,life:48+Math.random()*22,max:70,size:1.3+Math.random()*2.1,color});
  }
 }
 function frame(){
  ctx.clearRect(0,0,w,h);
  particles=particles.filter(p=>p.life>0);
  for(const p of particles){p.x+=p.vx;p.y+=p.vy;p.vy+=.035;p.vx*=.985;p.vy*=.985;p.life--;
   ctx.globalAlpha=Math.max(0,p.life/p.max);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();
  }ctx.globalAlpha=1;
  if(particles.length)raf=requestAnimationFrame(frame);else{cancelAnimationFrame(raf);raf=0}
 }
 function surprise(){const n=2+Math.floor(Math.random()*2);for(let i=0;i<n;i++)setTimeout(()=>burst(w*(.2+Math.random()*.6),h*(.18+Math.random()*.35)),i*260);if(!raf)raf=requestAnimationFrame(frame)}
 setTimeout(surprise,6500);
 setInterval(()=>{if(Math.random()>.28)surprise()},11000+Math.random()*3000);
 window.launchBirthdayFireworks=surprise;
})();


// Video Diary: mở từng thước phim trong một khung xem tập trung.
(()=>{
 const entries=[...document.querySelectorAll('.diary-entry')];
 const player=document.getElementById('diaryPlayer');
 const video=document.getElementById('diaryPlayerVideo');
 const title=document.getElementById('diaryPlayerTitle');
 const page=document.getElementById('diaryPlayerPage');
 if(!entries.length||!player||!video)return;
 const sources=[
  'assets/videos/moment-in-motion.mp4',
  'assets/videos/memory-video-01.mp4',
  'assets/videos/real-us.mp4',
  'assets/videos/memory-video-04.mp4'
 ];
 const titles=['Một khoảnh khắc đang chuyển động','Chuyện trong máy ảnh','Phiên bản chân thật','Lưu thêm vào bộ nhớ'];
 function closeDiaryPlayer(){
  player.classList.remove('show');player.setAttribute('aria-hidden','true');
  video.pause();video.removeAttribute('src');video.load();
  document.body.classList.remove('diary-player-open');
  if(window.resumeBirthdayMusicAfterVideo)window.resumeBirthdayMusicAfterVideo();
 }
 entries.forEach((entry,index)=>{
  entry.querySelector('.diary-watch').addEventListener('click',()=>{
   video.pause();video.src=sources[index];video.load();
   title.textContent=titles[index];page.textContent=`MEMORY NOTE 0${index+1}`;
   player.classList.add('show');player.setAttribute('aria-hidden','false');
   document.body.classList.add('diary-player-open');
   if(window.pauseBirthdayMusicForVideo)window.pauseBirthdayMusicForVideo();
   video.play().catch(()=>{});
  });
 });
 player.querySelectorAll('[data-diary-close]').forEach(el=>el.addEventListener('click',closeDiaryPlayer));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&player.classList.contains('show'))closeDiaryPlayer();});
})();


// Final birthday sequence: gentle reveal, working cat walk, then the sealed gift.
(()=>{
 const boom=document.getElementById('finalBoom');
 const message=document.getElementById('finalMessage');
 const goodbyeTrigger=document.getElementById('finalGoodbyeTrigger');
 const openGoodbye=document.getElementById('openFinalGoodbye');
 const goodbye=document.getElementById('finalGoodbye');
 const replayCat=document.getElementById('replayFinalCat');
 const walkingCat=document.getElementById('finalWalkingCat');
 const openVault=document.getElementById('openTreasureVault');
 const vault=document.getElementById('goldenTreasure');
 const walkway=document.querySelector('.final-walkway');
 const card=document.querySelector('.final-goodbye-card');

 function walkCat(){
  if(!walkingCat)return;
  walkingCat.classList.remove('walking');
  void walkingCat.offsetWidth;
  walkingCat.classList.add('walking');
 }
 function sparkle(target,count=12){
  if(!target)return;
  target.querySelectorAll('.final-spark').forEach(node=>node.remove());
  for(let i=0;i<count;i++){
   const dot=document.createElement('span');
   dot.className='final-spark';
   dot.textContent=['✦','✧','♥','•'][i%4];
   dot.style.setProperty('--spark-x',`${Math.round(Math.cos(i/count*Math.PI*2)*90)}px`);
   dot.style.setProperty('--spark-y',`${Math.round(Math.sin(i/count*Math.PI*2)*65)}px`);
   dot.style.setProperty('--spark-delay',`${(i%4)*45}ms`);
   target.appendChild(dot);
  }
  window.setTimeout(()=>target.querySelectorAll('.final-spark').forEach(node=>node.remove()),1500);
 }
 if(boom&&message&&goodbyeTrigger){
  boom.addEventListener('click',()=>{
   message.hidden=false;
   message.classList.remove('message-reveal');
   void message.offsetWidth;
   message.classList.add('message-reveal');
   goodbyeTrigger.hidden=false;
   goodbyeTrigger.classList.add('stage-reveal');
   boom.disabled=true;
   boom.textContent='Lời chúc đã được gửi ♡';
   sparkle(boom.parentElement,16);
   message.scrollIntoView({behavior:'smooth',block:'center'});
   if(typeof window.launchBirthdayFireworks==='function')window.launchBirthdayFireworks();
  });
 }
 if(openGoodbye&&goodbye){
  openGoodbye.addEventListener('click',()=>{
   goodbye.hidden=false;
   goodbye.classList.remove('goodbye-reveal');
   void goodbye.offsetWidth;
   goodbye.classList.add('goodbye-reveal');
   openGoodbye.disabled=true;
   openGoodbye.textContent='Đã đến lời tạm biệt cuối cùng ♡';
   goodbye.scrollIntoView({behavior:'smooth',block:'center'});
   walkCat();
   sparkle(card,18);
  });
 }
 if(replayCat&&walkingCat){
  replayCat.addEventListener('click',()=>{
   walkCat();
   if(walkway){
    walkway.classList.remove('paw-trail');
    void walkway.offsetWidth;
    walkway.classList.add('paw-trail');
   }
  });
 }
 if(openVault&&vault){
  openVault.addEventListener('click',()=>{
   const secretImage=vault.querySelector('[data-secret-src]');
   if(secretImage&&!secretImage.getAttribute('src'))secretImage.setAttribute('src',secretImage.dataset.secretSrc);
   vault.hidden=false;
   vault.classList.remove('vault-reveal');
   void vault.offsetWidth;
   vault.classList.add('vault-reveal');
   openVault.disabled=true;
   openVault.textContent='Kho báu đã mở ✨';
   vault.scrollIntoView({behavior:'smooth',block:'center'});
   sparkle(vault,24);
   if(typeof window.launchBirthdayFireworks==='function')window.launchBirthdayFireworks();
  });
 }
})();
