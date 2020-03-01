import React from 'react';
import './App.css';

import Grid from './Grid';

function App() {
  const sampleData = [{"id":223,"firstName":"Sherrell","lastName":"Kamdar","email":"YHaugland@odio.gov","phone":"(619)906-8337","address":{"streetAddress":"6552 Tortor Ave","city":"Lisle","state":"MS","zip":"35220"},"description":"dui sit suspendisse pharetra eros tempor dui rutrum et ipsum scelerisque ac in scelerisque fringilla tempor sollicitudin magna neque orci tellus sollicitudin pharetra turpis ante etiam porttitor at quis sollicitudin nec libero"},{"id":559,"firstName":"Marita","lastName":"Whatley","email":"PSwayngim@orci.com","phone":"(288)693-7638","address":{"streetAddress":"3777 Sed Rd","city":"Mount Vernon","state":"MD","zip":"85994"},"description":"sed rutrum dolor amet amet tortor malesuada ipsum ipsum fringilla at quis etiam rutrum amet lorem non consequat lectus magna vestibulum porttitor mattis etiam ante dolor porttitor odio sed dolor sed ipsum"},{"id":495,"firstName":"Freddy","lastName":"Vinsant","email":"ERoss@dolor.gov","phone":"(855)466-9270","address":{"streetAddress":"8966 Sit Ave","city":"Minneola","state":"CT","zip":"98737"},"description":"libero sit suspendisse sit sapien sollicitudin in libero pretium libero porttitor egestas mi in ac eget massa lectus magna sed lacus vestibulum facilisis tincidunt lorem lacus consectetur nunc sagittis orci aliquam malesuada"},{"id":988,"firstName":"Ken","lastName":"Lukenbill","email":"KLacrosse@massa.com","phone":"(105)936-8821","address":{"streetAddress":"9668 Egestas Rd","city":"South Bend","state":"NH","zip":"47496"},"description":"dolor curabitur at sollicitudin mattis magna odio sit et tincidunt nec dolor aliquam et elementum orci mattis augue nec dolor nunc sed ipsum amet quis neque sed vel lacus augue tempor ac"},{"id":974,"firstName":"Valarie","lastName":"Saver","email":"HWade@augue.gov","phone":"(547)790-9641","address":{"streetAddress":"5786 Amet Ln","city":"Edison","state":"DC","zip":"95568"},"description":"mattis dolor libero ante morbi neque nullam pulvinar consectetur placerat in convallis curabitur sed placerat non vel facilisis neque turpis placerat tortor lorem ac libero ipsum non at magna tortor libero dolor"},{"id":520,"firstName":"Maya","lastName":"Kesner","email":"EMuth@nunc.io","phone":"(861)436-5152","address":{"streetAddress":"7872 Tincidunt St","city":"Newburg","state":"NE","zip":"45557"},"description":"consectetur sed lacus placerat sit consequat sed nec amet sed sagittis id odio dolor at ac ac augue neque rutrum pulvinar elit sollicitudin dolor etiam id consequat sit lacus risus turpis rutrum"},{"id":438,"firstName":"Chandra","lastName":"Llewellyn","email":"LWalls@turpis.io","phone":"(377)943-6812","address":{"streetAddress":"9793 Lacus St","city":"Toronto","state":"UT","zip":"51591"},"description":"fringilla malesuada pulvinar ante augue nec non magna at nec rutrum amet pretium et augue ipsum odio dolor dolor lacus egestas at dolor tempor et pulvinar sapien amet nunc suspendisse tempor morbi"},{"id":445,"firstName":"Lorena","lastName":"Medina","email":"SDawn@vitae.gov","phone":"(740)194-5305","address":{"streetAddress":"3791 Aliquam Ln","city":"Redwood City","state":"PA","zip":"33298"},"description":"lacus morbi aliquam in sagittis scelerisque pretium tortor hendrerit ipsum hendrerit mi tincidunt tortor elementum risus nec facilisis lacus massa sed at scelerisque mattis et nec id curabitur facilisis et lacus sollicitudin"},{"id":735,"firstName":"Coty","lastName":"Reimer","email":"LGalapon@egestas.gov","phone":"(653)624-2286","address":{"streetAddress":"6360 Vestibulum Dr","city":"Saint Clair Shores","state":"NV","zip":"55694"},"description":"id amet sed vitae velit sollicitudin suspendisse odio hendrerit rutrum dolor sed orci vestibulum molestie mi porta ac malesuada mattis ipsum magna sed magna at nec et aenean turpis fringilla sapien porttitor"},{"id":372,"firstName":"Pauline","lastName":"Lester","email":"EMathis@aenean.ly","phone":"(372)759-9314","address":{"streetAddress":"3609 Lacus Dr","city":"Colorado Springs","state":"ND","zip":"43343"},"description":"vitae fringilla ac sed amet odio placerat placerat odio libero et sed eros tellus fringilla massa vel pharetra in facilisis mattis amet ac nec sed et vestibulum vestibulum risus tempor amet augue"},{"id":663,"firstName":"Bridgette","lastName":"Loudin","email":"AReith@tortor.ly","phone":"(635)971-3782","address":{"streetAddress":"1694 Amet Ct","city":"San Diego","state":"NH","zip":"96699"},"description":"eros ac odio mattis vestibulum amet tortor eget sapien sed pretium donec turpis scelerisque pretium vitae convallis sed tortor libero lacus ante ipsum ipsum sed morbi dolor mattis quis suspendisse turpis suspendisse"},{"id":669,"firstName":"Valoria","lastName":"Peterson","email":"ESlonaker@pulvinar.net","phone":"(548)973-2170","address":{"streetAddress":"9926 Pretium Rd","city":"Racine","state":"MS","zip":"47957"},"description":"eros sagittis id pulvinar hendrerit ipsum sit placerat vestibulum neque dolor magna tortor lacus turpis donec tortor tincidunt placerat convallis porta libero massa non amet turpis facilisis libero at sit lorem magna"},{"id":668,"firstName":"Kristina","lastName":"User","email":"AStubbs@eget.gov","phone":"(949)438-6885","address":{"streetAddress":"1339 Mi Ave","city":"Union Springs","state":"MO","zip":"44913"},"description":"porttitor nec ac vitae vestibulum aenean ac ac quis mattis massa nunc augue vitae sit pharetra placerat vestibulum pharetra eget donec sed tempor malesuada rutrum sapien elementum tellus libero in massa suspendisse"},{"id":502,"firstName":"Ganesh","lastName":"Gill","email":"SPitts@pretium.io","phone":"(891)018-0302","address":{"streetAddress":"8656 Mattis Dr","city":"North Kingstown","state":"MN","zip":"52915"},"description":"placerat lorem massa sed facilisis sed tellus massa odio lorem fringilla tellus at amet in vitae convallis dui morbi odio tincidunt sapien pulvinar lacus fringilla vel sit velit aliquam tincidunt lorem lacus"},{"id":391,"firstName":"Vernita","lastName":"Godwin","email":"STarbox@pretium.gov","phone":"(383)593-0864","address":{"streetAddress":"5618 Donec St","city":"Stamford","state":"WI","zip":"67862"},"description":"odio sit odio sapien nec lacus mattis nunc lectus amet odio sit curabitur sed aliquam lacus vel dolor sed facilisis at lacus non dolor egestas sollicitudin quis sed fringilla lacus elementum sollicitudin"},{"id":573,"firstName":"Stella","lastName":"Carpenter","email":"MLamb@molestie.net","phone":"(605)734-2892","address":{"streetAddress":"8383 Elementum Ln","city":"Sinton","state":"NM","zip":"58779"},"description":"lacus nec consectetur aliquam sollicitudin convallis quis sollicitudin amet consequat consequat lacus sit hendrerit massa suspendisse turpis hendrerit sed lacus sed lacus ipsum velit scelerisque massa mi lectus magna tincidunt et eros"},{"id":640,"firstName":"Camille","lastName":"Mitchell","email":"TShort@lectus.gov","phone":"(744)697-2936","address":{"streetAddress":"6500 Ante Rd","city":"Goodyear","state":"TN","zip":"12694"},"description":"pretium lorem adipiscing odio nec tortor eget egestas vel sollicitudin consequat dolor tortor pharetra elit morbi libero neque non sit lectus pretium neque pulvinar sed ac velit magna porttitor porta porta et"},{"id":481,"firstName":"Christopher","lastName":"Beckmann","email":"MJayanti@scelerisque.gov","phone":"(448)612-8795","address":{"streetAddress":"6719 Augue Ln","city":"West Hollywood","state":"MN","zip":"64729"},"description":"massa eros lorem nunc nec egestas aliquam fringilla adipiscing ac id ipsum lectus orci in dolor mi fringilla libero lacus adipiscing massa lacus pharetra dolor magna porttitor massa etiam sed egestas porta"},{"id":977,"firstName":"Chancelor","lastName":"Dartmann","email":"AMckelvy@sed.net","phone":"(516)858-4325","address":{"streetAddress":"7810 Adipiscing Dr","city":"Pleasant Grove","state":"IN","zip":"14121"},"description":"lectus tincidunt pulvinar tincidunt sapien tincidunt augue tellus elementum ante consectetur lacus neque nec odio mi magna rutrum odio scelerisque tempor lacus amet sed mi odio magna ante orci tortor vitae ac"},{"id":887,"firstName":"Roger","lastName":"Ockerman","email":"NDaniel@dolor.net","phone":"(933)314-0761","address":{"streetAddress":"1316 Odio St","city":"Sin City","state":"UT","zip":"84506"},"description":"malesuada pretium elementum nunc pharetra vitae dui convallis libero etiam elementum at sagittis at eros adipiscing eros rutrum egestas sit turpis aliquam sed massa quis amet nunc placerat hendrerit sapien nullam morbi"},{"id":710,"firstName":"Jeff","lastName":"Johnston","email":"DGarayan@nunc.io","phone":"(226)914-1330","address":{"streetAddress":"5912 Suspendisse Rd","city":"Hattiesburg","state":"DE","zip":"96212"},"description":"dui porttitor pulvinar tellus fringilla sollicitudin at sed dolor in eros lacus turpis dolor sit etiam ipsum nullam turpis tellus vitae tincidunt tempor ipsum donec ac amet vestibulum pretium lectus convallis lacus"},{"id":930,"firstName":"Shane","lastName":"Moghadam","email":"GEasterly@dolor.net","phone":"(565)094-5602","address":{"streetAddress":"2364 Sit Rd","city":"Liberty","state":"VT","zip":"21154"},"description":"magna tincidunt turpis lectus nec sagittis lectus donec mi lacus elementum sed rutrum aliquam pulvinar curabitur libero et lectus tincidunt adipiscing sapien tellus sollicitudin pulvinar ac facilisis dui odio at pharetra elit"},{"id":348,"firstName":"Carol","lastName":"Dedonato","email":"SHist@lorem.com","phone":"(204)830-3643","address":{"streetAddress":"3293 Massa Dr","city":"Pleasant Grove","state":"ND","zip":"52088"},"description":"turpis massa nec mattis pulvinar odio porttitor turpis magna fringilla aenean amet placerat vestibulum sed vitae lectus sed at et at fringilla rutrum magna morbi sed tellus mattis amet sed suspendisse morbi"},{"id":234,"firstName":"Maegan","lastName":"Lenze","email":"BVanessen@vitae.org","phone":"(414)667-4346","address":{"streetAddress":"2726 Lacus Ave","city":"Marietta","state":"MO","zip":"10539"},"description":"magna id ipsum amet porttitor libero risus at nec amet in amet dolor odio ipsum ipsum scelerisque sollicitudin vel lacus mattis libero sit sollicitudin morbi ac placerat placerat morbi ac lorem facilisis"},{"id":810,"firstName":"Petr","lastName":"Burton","email":"QByrd@porttitor.io","phone":"(640)052-5440","address":{"streetAddress":"4079 Massa Ct","city":"Northern","state":"AL","zip":"68520"},"description":"in elit porta libero nullam lacus ipsum ac convallis pharetra odio quis tincidunt magna aliquam sit pharetra vitae malesuada donec tellus nec dolor in aenean hendrerit tincidunt placerat ipsum lorem sit lorem"},{"id":909,"firstName":"Sharful","lastName":"Jafri","email":"KDerucher@porttitor.org","phone":"(391)055-8624","address":{"streetAddress":"4045 Nec Ln","city":"Lititz","state":"MT","zip":"71616"},"description":"sed eros nunc tellus aliquam non at magna ac magna lacus aenean in nullam massa aliquam sed elit placerat sit et augue sed tortor mi turpis nec velit sit tortor massa turpis"},{"id":424,"firstName":"Fred","lastName":"Giera","email":"CGrunert@ipsum.gov","phone":"(320)673-2171","address":{"streetAddress":"3533 Sed Ln","city":"Tulsa","state":"IA","zip":"91931"},"description":"ac adipiscing porta etiam nec nec magna nunc dolor lacus sollicitudin lacus velit mattis molestie dui sapien id at sed mattis suspendisse porta magna aliquam lacus malesuada lacus lacus nec dui elit"},{"id":905,"firstName":"Micheal","lastName":"Majewski","email":"BHumphrey@neque.com","phone":"(257)464-9580","address":{"streetAddress":"1854 Elit Ln","city":"Hillsboro","state":"LA","zip":"67244"},"description":"magna lectus elit tincidunt ac amet velit scelerisque id nunc magna hendrerit egestas donec aliquam porttitor vitae sollicitudin curabitur sed pretium mattis massa ac mattis rutrum egestas consectetur dolor odio aliquam lectus"},{"id":108,"firstName":"Isaiahretta","lastName":"Alagisan","email":"CGullion@non.net","phone":"(516)005-6317","address":{"streetAddress":"4972 Morbi St","city":"Slidell","state":"SD","zip":"34568"},"description":"amet eget magna nullam sapien ipsum aliquam placerat aliquam turpis convallis magna consequat dui nullam ac risus mattis etiam et vitae sagittis egestas mi dolor id ante aenean tortor sollicitudin libero placerat"},{"id":56,"firstName":"KaShaun","lastName":"Whatley","email":"NVlasses@quis.io","phone":"(639)065-5817","address":{"streetAddress":"2542 Hendrerit Ln","city":"Anonymous","state":"AL","zip":"66577"},"description":"neque et augue molestie orci pulvinar neque malesuada quis scelerisque orci augue orci odio lacus mattis et sollicitudin vel dui lacus sed velit at dolor elementum placerat lacus tempor lacus nullam quis"},{"id":931,"firstName":"Glenderee","lastName":"Pierce","email":"PHerrick@sed.ly","phone":"(616)340-8937","address":{"streetAddress":"477 Suspendisse Dr","city":"Apopka","state":"MD","zip":"52959"},"description":"tortor mi dolor ac pulvinar consequat non pharetra sed molestie id dui dolor amet dolor et sollicitudin mattis morbi tellus porttitor tincidunt dolor sed vestibulum consequat sit vestibulum magna mi lorem odio"},{"id":823,"firstName":"Shaun","lastName":"Mason","email":"MShah@morbi.io","phone":"(111)965-9587","address":{"streetAddress":"399 Neque Ln","city":"Peabody","state":"KY","zip":"37552"},"description":"fringilla porttitor massa sagittis non adipiscing sollicitudin adipiscing pharetra mi facilisis vestibulum amet hendrerit sollicitudin curabitur amet massa fringilla morbi ac aliquam et hendrerit non pharetra sagittis at porta vitae malesuada ac"}];
  const columns = [
    { key: 'id', text: '№' },
    { key: 'firstName', text: 'Имя' },
    { key: 'lastName', text: 'Фамилия' },
    { key: 'email', text: 'Email' },
    { key: 'phone', text: 'Телефон' }
  ];
  return (<Grid columns={columns} data={ sampleData }/>);
}

export default App;
