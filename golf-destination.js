const golfDestinationData={
  hanoi:{name:'Hanoi',eyebrow:'North Vietnam golf',intro:'A convenient base for combining city time with a wide choice of golf within driving distance.',hero:'https://golfsavers.b-cdn.net/assets/images/van-tri-fairway.jpg?quality=70',courses:[
    {name:'Van Tri Golf Club',location:'Hanoi',tag:'Private club feel',image:'https://golfsavers.b-cdn.net/assets/images/van-tri-fairway.jpg?quality=70',text:'A refined course close to Hanoi with water, mature landscaping and a calm members-club atmosphere.'},
    {name:'Long Bien Golf Course',location:'Hanoi',tag:'27 holes',image:'https://tourgolf.vn/en/sites/default/files/inline/images/5_2.jpg',text:'One of the easiest courses to reach from central Hanoi, with a polished urban-golf setting.'},
    {name:'Sky Lake Resort & Golf Club',location:'Hanoi',tag:'36 holes',image:'https://www.vietleadingtravel.com/images/Vietnam/Golf/Sky%20Lake/Sky-Lake-Golf-Resort-6.JPG',text:'Rolling fairways, lakes and open mountain views west of Hanoi.'},
    {name:'BRG Kings Island Golf Resort',location:'Hanoi',tag:'Resort golf',image:'https://en.tgroup.vn/uploads/images/golf/golf-ha-noi/brg-kings-island-kings-course-tgroup-travel-golf-2453.jpg',text:'A long-established golf resort beside Dong Mo Lake, easy to pair with a Hanoi stay.'},
    {name:'BRG Legend Hill Golf Resort',location:'Hanoi',tag:'Soc Son',image:'https://i0.wp.com/unigolf.vn/wp-content/uploads/2016/12/brg-legend-hill-golf-resort-1.jpg?fit=1012%2C500&ssl=1',text:'A modern course north of Hanoi with water, elevation changes and a distinctive twin-green concept.'}
  ]},
  halong:{name:'Ha Long / Hai Phong',eyebrow:'North Vietnam golf',intro:'Coastal and northern golf that combines naturally with Ha Long Bay and Hai Phong.',hero:'https://channel.mediacdn.vn/2021/3/13/photo-1-16156091139431909554753.jpg',courses:[
    {name:'FLC Golf Club Ha Long',location:'Ha Long',tag:'Bay views',image:'https://channel.mediacdn.vn/2021/3/13/photo-1-16156091139431909554753.jpg',text:'Elevated fairways with broad views over Ha Long Bay and its limestone islands.'},
    {name:'Chi Linh Golf Club',location:'Hai Duong',tag:'Lake & hills',image:'https://golftravel.vn/pic/Product/chi-linh-_639047839887265916_HasThumb.jpg',text:'A northern classic built around lakes, rolling ground and mature landscaping.'},
    {name:'Dragon Golf Links',location:'Hai Phong',tag:'Coastal',image:'https://cafefcdn.com/203337114487263232/2025/8/29/photo-2-1756364798819243690545-1756432565071-1756432565390675027676.jpg',text:'Open coastal views and sea breezes create a very different character from inland courses.'},
    {name:'Silk Path Dong Trieu Golf & Country Club',location:'Quang Ninh',tag:'New generation',image:'https://en.tgroup.vn/uploads/images/golf/golf-halong-quangninh/tgroup-san-golf-dong-trieu%20%285%29.jpg',text:'Rolling terrain and water features with easy access for a wider Ha Long itinerary.'}
  ]},
  ninhbinh:{name:'Ninh Binh',eyebrow:'North Vietnam golf',intro:'Golf framed by lakes, forest and limestone scenery, with heritage experiences close by.',hero:'https://tdtt.gov.vn/Portals/0/images/article/Golf%20Trabg%20an.jpg',courses:[
    {name:'Trang An Golf & Resort',location:'Ninh Binh',tag:'Lake setting',image:'https://tdtt.gov.vn/Portals/0/images/article/Golf%20Trabg%20an.jpg',text:'A tranquil lake-and-forest course that pairs naturally with a Ninh Binh stay.'},
    {name:'Royal Golf Course',location:'Ninh Binh',tag:'Karst landscape',image:'https://thanhcong.vn/wp-content/uploads/2024/04/anh_1.jpg',text:'Golf beside lakes and limestone formations in one of northern Vietnam’s most recognizable landscapes.'},
    {name:'Legend Valley Country Club',location:'Northern Vietnam',tag:'Limestone valley',image:'https://www.golfasian.com/photos/golf-courses/legend-valley-country-club/legend-valley-country-club04.jpg',text:'Sculpted fairways set against a dramatic limestone valley.'}
  ]},
  hue:{name:'Hue / Lang Co',eyebrow:'Central Vietnam golf',intro:'A scenic golf stop between Hue and Da Nang, with sea, mountains and resort stays close together.',hero:'https://i.ex-cdn.com/vntravellive.com/files/f1/uploaded/images/photo_news/800x800/news_20170720015924/LagunaGolfLangCo_Hole9.jpg.jpg',courses:[
    {name:'Laguna Golf Lang Co',location:'Lang Co',tag:'Sea & mountains',image:'https://i.ex-cdn.com/vntravellive.com/files/f1/uploaded/images/photo_news/800x800/news_20170720015924/LagunaGolfLangCo_Hole9.jpg.jpg',text:'A scenic course set between the coast and mountains, naturally paired with a luxury resort stay.'},
    {name:'Golden Sands Golf Resort',location:'Hue coast',tag:'Coastal links',image:'golf-da-nang.jpg',text:'A coastal golf option near Hue, useful for extending a central Vietnam golf itinerary.'}
  ]},
  danang:{name:'Da Nang / Hoi An',eyebrow:'Central Vietnam golf',intro:'Vietnam’s strongest destination-golf corridor, with standout courses close to the coast, resorts and Hoi An.',hero:'https://golfsavers.b-cdn.net/assets/images/ba-na-hills-aerial-view-h4.jpg?quality=70',courses:[
    {name:'Ba Na Hills Golf Club',location:'Da Nang',tag:'Mountain course',image:'https://golfsavers.b-cdn.net/assets/images/ba-na-hills-aerial-view-h4.jpg?quality=70',text:'A dramatic foothill layout west of Da Nang with elevation changes, forest and mountain views.'},
    {name:'Legend Da Nang Golf Resort',location:'Da Nang',tag:'Coastal golf',image:'https://vietnam.golftours.co.kr/assets/img/upload/rolling/zP448ifq.png',text:'Two contrasting championship experiences between Da Nang and Hoi An.'},
    {name:'Montgomerie Links Vietnam',location:'Da Nang / Hoi An',tag:'Central coast',image:'https://thegolftravelagency.com.au/wp-content/uploads/2020/05/Montgomerie-Links-9th-Green.jpg',text:'A polished central-coast course that fits easily into a Da Nang or Hoi An golf stay.'},
    {name:'Hoiana Shores Golf Club',location:'Hoi An',tag:'Links-style',image:'https://bqn.1cdn.vn/2021/01/11/images.baoquangnam.vn-storage-newsportal-2021-1-11-107387-_golff.jpg',text:'A striking coastal course south of Hoi An, routed through natural dunes.'},
    {name:'Vinpearl Golf Nam Hoi An',location:'Hoi An',tag:'Resort golf',image:'https://product.monkeytravel.com/1076778612/42f7cdcad46733cf4c1b768f56f1cefe.jpg_3.jpg',text:'A resort-based course south of Hoi An with open fairways and an easy leisure extension.'}
  ]},
  quynhon:{name:'Quy Nhon',eyebrow:'Central coast golf',intro:'A quieter golf destination on Vietnam’s south-central coast with sea views and resort stays.',hero:'https://file.hstatic.net/200000844097/file/flc-quy-nhon-goda-golf_4f70e3f21bd44d9bbc37fcc4ac7940e9.jpg',courses:[
    {name:'FLC Golf Links Quy Nhon',location:'Quy Nhon',tag:'Coastal resort',image:'https://file.hstatic.net/200000844097/file/flc-quy-nhon-goda-golf_4f70e3f21bd44d9bbc37fcc4ac7940e9.jpg',text:'A broad coastal golf landscape with sea views and a relaxed resort setting.'}
  ]},
  camranh:{name:'Cam Ranh / Nha Trang',eyebrow:'South-central coast golf',intro:'Coastal golf with strong resort infrastructure and easy beach extensions.',hero:'https://cdn.tuoitre.vn/471584752817336320/2023/4/6/kn-links-2-17-16807787401211600653313.jpg',courses:[
    {name:'KN Golf Links Cam Ranh',location:'Cam Ranh',tag:'Coastal links',image:'https://cdn.tuoitre.vn/471584752817336320/2023/4/6/kn-links-2-17-16807787401211600653313.jpg',text:'A coastal layout shaped through dunes on the Cam Ranh peninsula with wide ocean views.'},
    {name:'Vinpearl Golf Nha Trang',location:'Nha Trang',tag:'Island golf',image:'https://owa.bestprice.vn/images/media/vinpearl-golf-nha-trang-655799b262563.jpeg',text:'Island resort golf with bay views and an easy combination of golf, beach and resort time.'}
  ]},
  dalat:{name:'Da Lat',eyebrow:'Highland golf',intro:'Cooler weather, pine scenery and a slower highland rhythm make Da Lat a distinctive golf stop.',hero:'https://kampatour.com/pic/blog/images/Dalat-Palace-Golf-Club.jpg',courses:[
    {name:'Dalat Palace Golf Club',location:'Da Lat',tag:'Highland classic',image:'https://kampatour.com/pic/blog/images/Dalat-Palace-Golf-Club.jpg',text:'A historic parkland course in Da Lat’s cool highland climate, framed by pine trees and classic scenery.'}
  ]},
  phanthiet:{name:'Phan Thiet / Mui Ne',eyebrow:'South-central coast golf',intro:'Modern resort golf on the Phan Thiet coast, easy to combine with a beach stay.',hero:'https://tttctt.1cdn.vn/2023/10/11/1011-1-1.jpg',courses:[
    {name:'NovaWorld Phan Thiet Golf Club',location:'Phan Thiet',tag:'Resort golf',image:'https://tttctt.1cdn.vn/2023/10/11/1011-1-1.jpg',text:'A large modern golf complex on the coast with water, dunes and broad resort infrastructure.'}
  ]},
  hcmc:{name:'Ho Chi Minh City / Dong Nai',eyebrow:'South Vietnam golf',intro:'Convenient city and suburban golf for business trips, short stays and southern itineraries.',hero:'https://govigolf.com/images/golf_club_picture/San_golf_Long_Thanh_2.jpg',courses:[
    {name:'Long Thanh Golf Club',location:'Dong Nai',tag:'36 holes',image:'https://govigolf.com/images/golf_club_picture/San_golf_Long_Thanh_2.jpg',text:'A long-established southern favorite with hill and lake courses east of the city.'},
    {name:'Tan Son Nhat Golf Course',location:'Ho Chi Minh City',tag:'Urban golf',image:'https://cdn2.tuoitre.vn/thumb_w/1200/ttnew/r/2017/06/08/ttnews-image-41381-59758-1496907104.jpg',text:'Convenient city golf beside the airport, useful for business trips and short stays.'},
    {name:'Vietnam Golf & Country Club',location:'Ho Chi Minh City',tag:'City access',image:'golf.jpg',text:'An established golf option close to the city, suited to short golf breaks and business travel.'},
    {name:'Twin Doves Golf Club',location:'Binh Duong',tag:'Private club',image:'golf.jpg',text:'A landscaped club setting north of the city that works well for a dedicated golf day.'}
  ]},
  hotram:{name:'Ho Tram',eyebrow:'South Vietnam coastal golf',intro:'A coastal golf escape from Ho Chi Minh City with a dramatic dunes setting.',hero:'https://vietnamgolfmagazine.net/media/users/My_Linh/NewFolder/3AE760A1-7544-4B47-9148-71F761DCA9D5.jpeg',courses:[
    {name:'The Bluffs Grand Ho Tram',location:'Ho Tram',tag:'Dunes golf',image:'https://vietnamgolfmagazine.net/media/users/My_Linh/NewFolder/3AE760A1-7544-4B47-9148-71F761DCA9D5.jpeg',text:'A dramatic dunes course on the southern coast where wind, elevation and natural sand shape the experience.'}
  ]},
  phuquoc:{name:'Phu Quoc',eyebrow:'Island golf',intro:'Island golf paired naturally with beach resorts and longer leisure stays.',hero:'https://vietnam-luxury-tours.com/wp-content/uploads/2025/11/vinpearl-golf-phu-quoc-03.jpg',courses:[
    {name:'Vinpearl Golf Phu Quoc',location:'Phu Quoc',tag:'Island resort',image:'https://vietnam-luxury-tours.com/wp-content/uploads/2025/11/vinpearl-golf-phu-quoc-03.jpg',text:'A lush island course in northern Phu Quoc, easy to combine with beach resorts.'},
    {name:'Eschuri Vung Bau Golf',location:'Phu Quoc',tag:'Coastal',image:'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunParadiseLandPhuQuoc/29.Eschuri%20Vung%20Bau%20Golf/6200/image-thumb__6200__1600/Eschuri%20Vung%20Bau%202.jpg',text:'A newer course moving from forested terrain toward open coastal holes and sea views.'}
  ]}
};

(function(){
  const key=document.body.dataset.destination; const d=golfDestinationData[key]; if(!d)return;
  document.title=`${d.name} Golf Courses | Pacific World Travel`;
  const hero=document.querySelector('.gdest-hero-media'); if(hero) hero.style.backgroundImage=`url("${d.hero}")`;
  document.querySelectorAll('[data-dest-name]').forEach(el=>el.textContent=d.name);
  const eyebrow=document.querySelector('[data-dest-eyebrow]'); if(eyebrow) eyebrow.textContent=d.eyebrow;
  const intro=document.querySelector('[data-dest-intro]'); if(intro) intro.textContent=d.intro;
  const count=document.querySelector('[data-dest-count]'); if(count) count.textContent=`${d.courses.length} selected ${d.courses.length===1?'course':'courses'}`;
  const list=document.querySelector('[data-course-list]');
  if(list) list.innerHTML=d.courses.map((c,i)=>`<article class="gdest-course"><div class="gdest-media"><img loading="lazy" src="${c.image}" alt="${c.name}" onerror="this.onerror=null;this.src='golf.jpg';"></div><div class="gdest-copy"><div class="gdest-kicker"><span>${c.location}</span><span>${c.tag}</span></div><h3>${c.name}</h3><p>${c.text}</p><div class="gdest-actions"><a class="gdest-link" href="contact.html">View / enquire →</a></div></div></article>`).join('');
})();