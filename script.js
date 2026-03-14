document.addEventListener("DOMContentLoaded",function(){

document.getElementById("heroTitle").textContent=
"युवा सशक्तीकरण र पाँचथरको उज्ज्वल भविष्य";

document.getElementById("heroSubtitle").textContent=
"राष्ट्रिय स्वतन्त्र पार्टीको युवा संगठन, पाँचथरका युवाहरूको साझा आवाज।";



const aboutText = `

<p>
राष्ट्रिय स्वतन्त्र युवा संघ पाँचथर युवाहरूलाई संगठित गर्दै
सामाजिक परिवर्तन र विकासको लागि काम गर्ने संस्था हो।
</p>

<p>
हामी पाँचथरका युवाहरूलाई नेतृत्व, नवप्रवर्तन,
र सामाजिक उत्तरदायित्वमा अग्रसर बनाउन प्रतिबद्ध छौं।
</p>

`;

document.getElementById("aboutContent").innerHTML = aboutText;



const activities = [

"नेतृत्व विकास तालिम",
"सामाजिक सेवा अभियान",
"शैक्षिक सहयोग कार्यक्रम",
"खेलकुद तथा सांस्कृतिक कार्यक्रम"

];


const container = document.getElementById("activitiesContent");


activities.forEach(activity=>{

const card = document.createElement("div");

card.className="activity-card";

card.innerHTML=`<h3>${activity}</h3>`;

container.appendChild(card);

});



const contactText = `

<p>इमेल: rastriyaswatantrayubasangh@gmail.com</p>

<p>ठेगाना: पाँचथर जिल्ला, नेपाल</p>

`;

document.getElementById("contactContent").innerHTML=contactText;



document.getElementById("joinBtn").onclick=function(){

alert("हामीसँग जोडिनु भएकोमा धन्यवाद!");

}

});
