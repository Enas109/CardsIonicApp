// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {

/*********** Start sideMenu ***************/
$rootScope.sideMenus = [
    {
        name: "الحقائق والمفاهيم",
        href: "facts",
        icon: "ion-eye"
    },{
        name: "الأماكن والمعالم",
        href: "places",
        icon: "ion-image"
    },{
        name: "الشخصيات",
        href: "chars",
        icon: "ion-ios-people"
    },{
        name: "الأحداث",
        href: "events",
        icon: "ion-ios-clock"
    },{
        name: "المنظمات",
        href: "organizations",
        icon: "ion-flag"
    },{
        name: "مسرد الأحداث",
        href: "glossary",
        icon: "ion-bookmark"
    },{
        name: "تسجيل الخروج",
        href: "login",
        icon: "ion-ios-unlocked"
    }
];
/*********** Start Facts ***************/
$rootScope.facts = [
    {
        id: "1",
        name: "الشمس",
        img: "img/facts/sunrise.jpg",
        description: "النجم المركزي للمجموعة الشمسية، وتعد أقرب النجوم إلى الأرض، وهي عبارة عن كرة غازية تتميز بالارتفاع الشديد لدرجة الحرارة، وتعد المصدر الرئيسي للحرارة والضوء على سطح الأرض.",
        place: "الفضاء",
        type: "عمر الأرض",

    },{
        id: "2",
        name: "القمر",
        img: "img/facts/moon.jpg",
        description: "يعد القمر من توابع كوكب الأرض، وهو أول جسم فضائي يزوره الإنسان،وهو جسم يقوم بعكس أشعه الشمس.",
        place: "الفضاء",
        type: "عمر الأرض",

    },{
        id: "3",
        name: "كوكب المريخ",
        img: "img/facts/mars.jpg",
        description: "هو رابع كواكب المجموع الشمسية، ويطلق عليه الكوكب الأحمر، وهو أكثر الكوكب دراسة من العلماء، ويصنف على أنه كوكب صخري، وهو الجار الخارجي للأرض.",
        place: "الفضاء",
        type: "عمر الأرض",

    },{
        id: "4",
        name: "كوكب الزهره",
        img: "img/facts/venus.jpg",
        description: "هو ثاني كواكب المجموعة الشمسيّة بُعداً عن الشّمس، وأقرب الكواكب إلى الأرض، كما يُصنَّف أنّه أحد الكواكب الصخريّة، ويتميز سطحه بالارتفاع الشديد في درجات الحرارة.",
        place: "الفضاء",
        type: "عمر الأرض",

    }
];
/*********** Start places ***************/
$rootScope.places = [
    {
        id: "1",
        name: "نهر سوس",
        img: "img/places/soosRiver.jpg",
        description: "يقع نهر السوس في شمال غرب أفريقيا، وفي جنوب غرب المملكة المغربية، ويبلغ طولة 200 كم، وينبع من السفوح الجنوبية الغربية لسلاسل الأطلس.",
        place: "المغرب",
        type: "أنهار"
    },{
        id: "2",
        name: "نهر تانسيفت",
        img: "img/places/tansefitRiver.jpg",
        description: "هو نهر في وسط المغرب، منبعة في شرق الأطلس الكبير، ويمر شمال تيزي نتيشكة، كما يمر بالقرب من مدينة مراكش، وله منفذ إلي المحيط الأطلسي",
        place: "المغرب",
        type: "أنهار"
    },{
        id: "3",
        name: "صفاقس",
        img: "img/places/la-mairie-in-Sfax.jpg",
        description: "تعد ثاني أكبر المدن التونسية بعد العاصمة، وثاني أهم مدينة صناعية في البلاد التونسية، ومن أهم صناعتها",
        place: "الجمهورية التونسية",
        type: "مدينة"
    },{
        id: "4",
        name: "الرأس الأبيض",
        img: "img/places/الرأس_الأبيض.jpg",
        description: "كان يعتقد أن الرأس الأبيض الواقعة في شمال الجمهورية التونسية هي أقصي نقطة داخل الأرض الأفريقية شمالا إلي أن ثبت أن رأس ابن سكه الذي يقع إلي الغرب منه هو النقطه الأعلي في القاره الأفريقية.",
        place: "ولايه بنزرت-تونس",
        type: "أماكن"
    }
];
/*********** Start Chars ***************/
$rootScope.chars = [
    {
        id: "1",
        name: "فيروز",
        img: "img/char/فيروز.jpg",
        description: "حصلت علي وسام الأستحقاق اللبناني وهو أعلي وسام في الدولة، بالإضافة إلي وسام الكوموندور الفرنسي، ووسام الثقافة الرفيعة من تونس.",
        job: "مطربه",
        birthDate: "1935 م",
        nationality: "لبنان"
    },{
        id: "2",
        name: "صباح",
        img: "img/char/صباح.jpg",
        description: "غنت لعمالقة العالم العربي منهم محمد عبدالوهاب، أول فنانةعربية وقفت علي مسارح عالمية، حصلت علي ثلاثة أوسمة تكريمية من ملك الأردن.",
        job: "مطربه",
        birthDate: "1927 م",
        nationality: "لبنان"
    },{
        id: "3",
        name: "رودي فرنانديز",
        img: "img/char/فرنانديز.jpg",
        description: "خاض أول مباراة له مع المنتخب الإسباني في عام 2004، وهو أول لاعب أوروبي يشارك في مسابقات سلام دانك في الدوري الأمريكي للمحترفين.",
        job: "لاعب كره سلة",
        birthDate: "1985 م",
        nationality: "إسبانيا"
    },{
        id: "4",
        name: "سيمونا هاليب",
        img: "img/char/هاليب.jpg",
        description: "المصنفة الرابعة عالميًا، وتم منحها جائزة دايموند إبسز؛ وهي جائزة تمنح للاعبة الأكثر مشاركة في الأعمال الخيرية ورفع مستوي لعبة التنس بين السيدات.",
        job: "لاعبة كرة تنس",
        birthDate: "1991 م",
        nationality: "كونستانتسا، رومانيا"
    }
];
/*********** Events Array **************/
$rootScope.events = [
    {
        id: "1",
        name: "أولي حملات بريطانيا ضد القواسم",
        img: "img/events/القواسم.jpg",
        description: "أرسلت بريطانيا اولي حملاتها ضد القواسم بقيادة (سيتون) الذي تمكن من ضرب الحصار علي (بني معن) حلفاء وأقارب القواسم في جزيرة قشم.",
        type: "حروب",
        birthDate: "1805 م",
        country: "الإمارات العربية المتحدة"
    },{
        id: "2",
        name: "ميلاد مؤسس الأتحاد",
        img: "img/events/الشيخ_زايد.jpg",
        description: "ولد الشيخ زايد في قصر الحصن بإماره أبو ظبي ووالده الشيخ سلطان بن زايد آل نيهان، ووالدته الشيخه سلامه بنت الشيخ بطن بن خادم آل حامد القبيسي.",
        type: "دول وحكام",
        birthDate: "1918 م",
        country: "الإمارات العربية المتحدة"
    },{
        id: "3",
        name: "أفتتاح جامعه الإمارات",
        img: "img/events/افتتاح_جامعه_الإمارات.jpg",
        description: "أفتتح الشيخ زايد -رحمه الله- جامعة الإمارات العربية المتحدة. وهي الجامعة الأولي في الإمارات العربية المتحدة، وهي معتمدة دوليًا من قبل هيئة الاعتماد الأكاديمي العالمي لجامعات عربي الولايات المتحدة.",
        type: "افتتاحات",
        birthDate: "1977 م",
        country: "الإمارات العربية المتحدة"
    },{
        id: "4",
        name: "التوجية بإنشاء مسجد زايد",
        img: "img/events/التوجيه_بانشاء_مسجد_زايد.jpg",
        description: "أصدر الشيخ زايد -رحمه الله- توجيهاته بإنشاء مسجد (زايد بن سلطان الثاني) في مدينة أبوظبي ليكون أكبر مسجد في دولة الأمارات.",
        type: "بناء مساجد",
        birthDate: "1996 م",
        country: "الإمارات العربية المتحدة"
    }
];
/*********** Details Array **************/
$rootScope.details = [
    {
        id: "1",
        name: "فيروز",
        img: "img/char/فيروز.jpg",
        description: "نهاد رزق وديع حداد، المعروفة بالاسم الفني فيروز مطربة ومغنية لبنانية، ولدت في بيروت بتاريخ 21 نوفمبر/ تشرين الثاني 1935م .قدّمت مع زوجها الراحل عاصي الرحباني وأخيه منصور الرحباني، المعروفين بالأخوين رحباني، العديد من الأوبريهات والأغاني التي يصل عددها إلى 800 أغنية[1]. بدأت الغناء وهي في عمر السادسة تقريباً في عام 1940م، حيث انضمت لكورال الإذاعة اللبنانية. وعندما عرفها حليم الرومي، أطلق عليها اسم فيروز ولحن لها بعض الأغنيات بعد أن رأى فيها موهبة فذة ومستقبلاً كبيراً[1]، و لاقت رواجًا واسعًا في العالم العربي والشرق الأوسط والعديد من دول العالم. فيروز من أقدم فنّاني العالم المستمرين إلى حد اليوم، ومن أفضل الأصوات العربية ومن أعظم مطربي العالم. نالت جوائز و أوسمة عالمية",
        job: "مطربه",
        birthDate: "1935 م",
        nationality: "لبنان"
    },{
        id: "2",
        name: "صباح",
        img: "img/char/صباح.jpg",
        description: "بدايتها الفنية كانت في صغرها في لبنان، واستطاعت أن تميز بشهرتها المحلية، حتى استطاعت لفت انتباه المنتجة السينمائية اللبنانية الأصل آسيا داغر والتي كانت تعمل في القاهرة، فأوعزت إلى وكيلها في لبنان قيصر يونس لعقد اتفاق معها لثلاثة أفلام دفعة واحد، وكان الاتفاق بأن تتقاضى 150 جنيهًا مصريًا عن الفيلم الأول[3] ويرتفع السعر تدريجياً. ذهبت إلى أسيوط برفقه والدها ووالدتها ونزلوا ضيوفا على آسيا داغر في منزلها بالقاهرة، وكلف الملحن رياض السنباطي بتدريبها فنيًا ووضع الألحان التي ستغنيها في الفيلم، وفي تلك الفترة اختفى اسم «جانيت الشحرورة» وحل مكانه اسم «صباح» في فيلم القلب له واحد عام 1945م، وكان عمرها وقتها حوالي 18 عام. ويقال أن السنباطي لاقى صعوبة كبيرة في تطويع صوتها وتلقينها أصول الغناء لأن صوتها الجبلي كان ما زال معتادًا على الاغاني البلدية المتسمة بالطابع الفولكلوري الخاص بلبنان وسوريا، وهي شقيقة الممثلة لمياء فغالي.",
        job: "مطربه",
        birthDate: "1927 م",
        nationality: "لبنان"
    },{
        id: "3",
        name: "رودي فرنانديز",
        img: "img/char/فرنانديز.jpg",
        description: "خاض أول مباراة له مع المنتخب الإسباني في عام 2004، وهو أول لاعب أوروبي يشارك في مسابقات سلام دانك في الدوري الأمريكي للمحترفين.رودي فرنانديز مواليد 4 أبريل 1985، هو لاعب كرة سلة إسباني يلعب مع فريق ريال مدريد بالونكيستو ويحمل الرقم 5. يبلغ طوله 6 قدم 5 بوصة (2.0 م).",
        job: "لاعب كره سلة",
        birthDate: "1985 م",
        nationality: "إسبانيا"
    },{
        id: "4",
        name: "سيمونا هاليب",
        img: "img/char/هاليب.jpg",
        description: "سيمونا هاليب (مواليد 27 سبتمبر 1991) لاعبة تنس محترفة رومانية تحتل حالياً التصنيف الثالث عالميا في تصنيف لاعبات التنس المحترفات و أعلي تصنيف وصلت له في مشوارها كان التصنيف الثاني عالميا في أغسطس 2014 و هي الأعلي تصنيفا و الأكثر حصولا علي الالقاب من بين لاعبات التنس الرومانيات عبر الناريخ . سيمونا حصلت علي بطولة فرنسا المفتوحة للناشئات عام 2008. أفضل نتائجها في الجراند سلام الوصول لنهائي فرنسا المفتوحة 2014 و نصف نهائي ويمبلدون 2014 و نصف نهائي أمريكا المفتوحة 2015 حصلت علي 14 لقباً في مسيرتها حتي الآن أهمهم بطولتان من فئة الألف نقطة في انديان ويلز 2015 و مدريد 2016 و ثلاث بطولات من فئة التسعمائة نقطة في الدوحة 2014 و دبي 2015 و مونتريال 2016 .",
        job: "لاعبة كرة تنس",
        birthDate: "1991 م",
        nationality: "كونستانتسا، رومانيا"
    }
];
/*********** Start Facts ***************/
    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
  })
  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html'
  })
  .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
  })
  .state('app.facts', {
    url: '/facts',
    views: {
      'menuContent': {
        templateUrl: 'templates/facts.html'
      }
    }
  })

  .state('app.places', {
      url: '/places',
      views: {
        'menuContent': {
          templateUrl: 'templates/places.html'
        }
      }
    })

  .state('app.chars', {
      url: '/chars',
      views: {
        'menuContent': {
          templateUrl: 'templates/chars.html'
        }
      }
    })

  .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html'
        }
      }
    })

  .state('app.organizations', {
      url: '/organizations',
      views: {
        'menuContent': {
          templateUrl: 'templates/organizations.html'
        }
      }
    })

  .state('app.glossary', {
      url: '/glossary',
      views: {
        'menuContent': {
          templateUrl: 'templates/glossary.html'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
