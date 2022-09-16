function initMap() {
    var kalady = {lat: 10.1710, lng: 76.4468};
    var shankara = {lat: 10.167636, lng: 76.436819};
    var aashramam = {lat: 10.167249, lng: 76.444332};
    var mandapam = {lat: 10.167447, lng: 76.436870};
    var krishna = {lat: 10.167982, lng: 76.446218};
    var mani = {lat: 10.181075, lng: 76.445816};
    var mattoor = {lat: 10.166211, lng: 76.420680};
    var narayana = {lat: 10.166950, lng: 76.403492};
    var thekke = {lat: 10.167976, lng: 76.446539};
    var aarattu = {lat: 10.194311, lng: 76.513562};
    var muthala = {lat: 10.167216, lng: 76.446483};

    var map = new google.maps.Map(document.getElementById('kalady-map'), {
      zoom: 13,
      center: kalady
    });

    // Shankara Temple
    var contentString1 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Shankara Temple</h1>'+
        '<div id="bodyContent">'+
        '<p>The Shankara Shrine at Kalady, run by the Sringeri Math, is a large, partly open structure situated on the northern bank of the river Periyar. There are two major shrines in the temple: one is dedicated to Shankara and the other to Goddess Saradamba, the main deity of Sringeri. The samadhi (place of death) of Shankara\'s mother is also located here. A small shrine to Vinayaka is the scene of evening prayers, chanted to the rhythmic ringing of cymbals. The worship in these temples is done by Tamil or Kannada Smartha Brahmins and not by Namboothiris.</p> ' +
        '</div>'+
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
      content: contentString1
    });

    var marker1 = new google.maps.Marker({
      position: shankara,
      map: map,
      title: 'Shankara Temple'
    });
    marker1.addListener('click', function() {
      infowindow1.open(map, marker1);
    });
    // Shankara Temple done

    // Sree Ramakrishna Advaita Ashram
    var contentString2 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Sree Ramakrishna Advaita Ashram</h1>'+
        '<div id="bodyContent">'+
        '<p>The Ramakrishna Advaita Ashram is a branch centre of Ramakrishna Math, headquartered at Belur, West Bengal. It is located very near the accepted birthplace of Shankara. It has a spacious prayer hall and a shrine modeled on the Sri Ramakrishna temple at Belur Math. The Ashram also runs a school (Brahmanandodayam), a charitable dispensary, and a library.</p> ' +
        '</div>'+
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
    });

    var marker2 = new google.maps.Marker({
      position: aashramam,
      map: map,
      title: 'Sree Ramakrishna Advaita Ashram'
    });
    marker2.addListener('click', function() {
      infowindow2.open(map, marker2);
    });
    // Sree Ramakrishna Advaita Ashram done

    // Sri Adi Sankara Keerthi Sthamba Mandapam
    var contentString3 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Sri Adi Sankara Keerthi Sthamba Mandapam</h1>'+
        '<div id="bodyContent">'+
        '<p>The Shankara Shrine at Kalady, run by the Sringeri Math, is a large, partly open structure situated on the northern bank of the river Periyar. There are two major shrines in the temple: one is dedicated to Shankara and the other to Goddess Saradamba, the main deity of Sringeri. The samadhi (place of death) of Shankaras mother is also located here. A small shrine to Vinayaka is the scene of evening prayers, chanted to the rhythmic ringing of cymbals. The worship in these temples is done by Tamil or Kannada Smartha Brahmins and not by Namboothiris.</p> ' +
        '</div>'+
        '</div>';

    var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
    });

    var marker3 = new google.maps.Marker({
      position: mandapam,
      map: map,
      title: 'Sri Adi Sankara Keerthi Sthamba Mandapam'
    });
    marker3.addListener('click', function() {
      infowindow3.open(map, marker3);
    });
    // Sri Adi Sankara Keerthi Sthamba Mandapam done

    // Sri Krishna Temple
    var contentString4 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Sri Krishna Temple</h1>'+
        '<div id="bodyContent">'+
        '<p>To the west of the Sringeri Math temple complex is a temple dedicated to Krishna. This temple is known as the ancestral deity of Shankaracharya. It is mentioned as the kuladevata (ancestral deity) in verse 243 of Shankara\'s Prabodha Sudhakaram. The temple is under Kalady Devasthanam, in trusteeship of two Namboothiri families who had close associations with the life of Shankara. It is also the only surviving structure from the time of Shankara. The worship in this temple is also conducted by Namboothiris, unlike in the Shankaracharya temple. The important event in this temple is Kanakadhara Yanjam. Sree Sankara during pendancy of upanayanam went begging for alms around and reached door steps of a poor widowed lady who had nothing but a dried amla to offer. Moved by the condition of that lady and her broad mind to offer whatever is available to bala Bhikshu , Sankara instantly recited Kanakadhara stotram. The golden gooseberry rain fell in the garden of that old lady and the house got to be known as Swarnathu mana . The ancestrial deity temple of Sree Sankaracharya long back has started a Yagna during Sankara Jayanti season chanting Kanakadhara stotram by 32 Brahmins representing 32 years of life of that great guru.</p> ' +
        '</div>'+
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
    });

    var marker4 = new google.maps.Marker({
      position: krishna,
      map: map,
      title: 'Sri Krishna Temple'
    });
    marker4.addListener('click', function() {
      infowindow4.open(map, marker4);
    });
    // Sri Krishna Temple done

    // Manickamangalam Karthyayani Temple
    var contentString5 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Manickamangalam Karthyayani Temple</h1>'+
        '<div id="bodyContent">'+
        '<p>One kilometre north of Kalady is the Manickamangalam temple, dedicated to Bhagavathi, or the goddess Durga. Shankara\'s father Sivaguru was the priest in this temple.<br><br> ' +
        'According to legend, one day he could not go by himself, so he sent little Shankara with a measure of milk as an offering to Devi. Shankara noticed that even after the offering, the measure of milk before Devi remained unchanged. He was sad and started to cry, so Devi took pity on the boy and drank the milk. References to the deity can be found in <a href="https://en.m.wikipedia.org/wiki/Saundarya_Lahari">Soundaryalahari</a>.</p>'
        '</div>'+
        '</div>';

    var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
    });

    var marker5 = new google.maps.Marker({
      position: mani,
      map: map,
      title: 'Manickamangalam Karthyayani Temple'
    });
    marker5.addListener('click', function() {
      infowindow5.open(map, marker5);
    });
    // Manickamangalam Karthyayani Temple done

    // Mattoor Thiru Vellaman Thulli Siva Temple
    var contentString6 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Mattoor Thiru Vellaman Thulli Siva Temple</h1>'+
        '<div id="bodyContent">'+
        '<p>The Shankara Shrine at Kalady, run by the Sringeri Math, is a large, partly open structure situated on the northern bank of the river Periyar. There are two major shrines in the temple: one is dedicated to Shankara and the other to Goddess Saradamba, the main deity of Sringeri. The samadhi (place of death) of Shankara\'s mother is also located here. A small shrine to Vinayaka is the scene of evening prayers, chanted to the rhythmic ringing of cymbals. The worship in these temples is done by Tamil or Kannada Smartha Brahmins and not by Namboothiris.</p> ' +
        '</div>'+
        '</div>';

    var infowindow6 = new google.maps.InfoWindow({
      content: contentString6
    });

    var marker6 = new google.maps.Marker({
      position: mattoor,
      map: map,
      title: 'Mattoor Thiru Vellaman Thulli Siva Temple'
    });
    marker6.addListener('click', function() {
      infowindow6.open(map, marker6);
    });
    // Mattoor Thiru Vellaman Thulli Siva Temple done

    // Nayathodu Sankara Narayana Temple
    var contentString7 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Nayathodu Sankara Narayana Temple</h1>'+
        '<div id="bodyContent">'+
        '<p>Nayathodu Sankara Narayana Temple, 3 km west of Kalady, is an example of Advaita in worship by Shankaracharya. According to legend, once Shankara prayed to Vishnu in this Shiva temple, Vishnu also came to reside in same idol. To this day, after offerings are made to Shiva, everything is removed and offerings are made to the same idol for Vishnu.</p> ' +
        '</div>'+
        '</div>';

    var infowindow7 = new google.maps.InfoWindow({
      content: contentString7
    });

    var marker7 = new google.maps.Marker({
      position: narayana,
      map: map,
      title: 'Nayathodu Sankara Narayana Temple'
    });
    marker7.addListener('click', function() {
      infowindow7.open(map, marker7);
    });
    // Nayathodu Sankara Narayana Temple done

    // Thekke Madam
    var contentString8 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Thekke Madam</h1>'+
        '<div id="bodyContent">'+
        '<p>Thekke Madam is just adjacent to Krishna Temple. It was founded by the Trichur Shankaracharya.<br><br> ' +
        'As a homage to Shankara, this Trichur Math was given special archana rights at Krishna Temple, the temple of the Shankara\'s ancestral deity, in year 825. To facilitate this leasehold property (kana pattam), lands were provided by Kalady Devaswom. This Math was given kingship rights in Kalady in 1730, thus marking the area of Sankara Sanketham. This was the only Math of Shankaracharya tradition for centuries that respected Kalady and sanctified it.</p>' +
        '</div>'+
        '</div>';

    var infowindow8 = new google.maps.InfoWindow({
      content: contentString8
    });

    var marker8 = new google.maps.Marker({
      position: thekke,
      map: map,
      title: 'Thekke Madam'
    });
    marker8.addListener('click', function() {
      infowindow8.open(map, marker8);
    });
    // Thekke Madam done

    // Kalady Kadavu (Aaraattu Kadavu)
    var contentString9 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Kalady Kadavu (Aaraattu Kadavu)</h1>'+
        '<div id="bodyContent">'+
        '<p>The Kalady Kadavu is the place where the river took its turn, and where Kalady was born. It was also the place where Shankara had first performed Aaraattu (a river bath of an idol) for his ancestral deity before installing it at its current location. For centuries, during the festival at Sree Krishna Temple, the Aarattu has been carried out at this ghat.</p> ' +
        '</div>'+
        '</div>';

    var infowindow9 = new google.maps.InfoWindow({
      content: contentString9
    });

    var marker9 = new google.maps.Marker({
      position: aarattu,
      map: map,
      title: 'Kalady Kadavu (Aaraattu Kadavu)'
    });
    marker9.addListener('click', function() {
      infowindow9.open(map, marker9);
    });
    // Kalady Kadavu (Aaraattu Kadavu) done

    // Muthala Kadavu
    var contentString10 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Muthala Kadavu</h1>'+
        '<div id="bodyContent">'+
        '<p>The "Muthala Kadavu," or Crocodile Ghat, is where Shankara\'s life turned to sannyasa (ascetic life).<br><br>' +
        'His mother Aryamba did not agree with his desire to become a sannyasin. Legend says that one day, Shankara was touched by a dog and, as per custom followed by the community, Shankara had to take bath. Accompanied by mother, Shankara went to river Poorna to bathe. While in the water, a crocodile caught hold of his leg. The drowning htold his mother that the crocodile would leave him alone if she would allow him to take up sannyasa. Helpless, his mother agreed, and the crocodile freed Shankara.</p> ' +
        '</div>'+
        '</div>';

    var infowindow10 = new google.maps.InfoWindow({
      content: contentString10
    });

    var marker10 = new google.maps.Marker({
      position: muthala,
      map: map,
      title: 'Muthala Kadavu'
    });
    marker10.addListener('click', function() {
      infowindow10.open(map, marker10);
    });
    // Muthala Kadavu done

}