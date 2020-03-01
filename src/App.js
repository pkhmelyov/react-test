import React from 'react';
import './App.css';

import Grid from './Grid';

function App() {
  const sampleData = [
    {
      id: 469,
      firstName: "Charlene",
      lastName: "Willman",
      email: "KJensen@magna.net",
      phone: "(184)717-8321",
      description: "mi nec mi lorem ipsum dolor lacus non vestibulum amet sed et at lectus tincidunt molestie ac mattis sed ipsum placerat nec massa vestibulum ac pretium tortor massa velit eros molestie pulvinar"
    },
    {
      id: 258,
      firstName: "Chaiporn",
      lastName: "Sabol",
      email: "TMasimore@molestie.io",
      phone: "(839)172-6918",
      description: "porta massa tincidunt aliquam mattis nec dolor amet etiam orci aliquam tincidunt vestibulum molestie elit sed malesuada elit tincidunt donec porta dui non tincidunt odio neque nec non lorem non sollicitudin placerat"
    },
    {
      id: 956,
      firstName: "Chaiporn",
      lastName: "Weakliem",
      email: "DWollf@in.org",
      phone: "(778)029-0700",
      description: "placerat libero pulvinar turpis lacus mattis elit massa tempor tincidunt rutrum mattis placerat velit tincidunt amet sollicitudin hendrerit placerat turpis velit orci magna lorem amet magna sollicitudin ante malesuada elementum amet curabitur"
    },
    {
      id: 361,
      firstName: "Valerie",
      lastName: "Forenda",
      email: "KHoward@mattis.ly",
      phone: "(159)637-1389",
      description: "magna mattis ante adipiscing sed risus malesuada neque eget ipsum lacus sit tincidunt consequat morbi suspendisse egestas lacus facilisis ipsum ante porttitor massa massa tortor lectus turpis sit convallis ante magna aliquam"
    },
    {
      id: 415,
      firstName: "Lauris",
      lastName: "Shah",
      email: "NMortimore@sed.net",
      phone: "(885)720-6448",
      description: "tincidunt nec mattis turpis tincidunt porta at dolor odio in molestie massa suspendisse massa aenean ipsum aenean sed vestibulum malesuada ipsum amet tempor in nullam amet sed in non tortor dolor lectus"
    },
    {
      id: 956,
      firstName: "Trang",
      lastName: "Ekekwe",
      email: "DBrazell@at.gov",
      phone: "(262)701-5231",
      description: "non porttitor vitae aliquam tincidunt sollicitudin aenean sit libero velit sagittis pretium lacus libero molestie rutrum porta nullam sit mi pulvinar sollicitudin etiam convallis nec neque et massa vitae at eros suspendisse"
    },
    {
      id: 715,
      firstName: "Teresita",
      lastName: "Peyton",
      email: "DHeppelmann@tempor.ly",
      phone: "(949)766-7958",
      description: "risus tempor aliquam at magna sed sit libero elit amet mattis orci hendrerit aliquam vel rutrum elementum sagittis sed tempor in morbi sed risus nec suspendisse vestibulum quis quis aenean lacus pulvinar"
    },
    {
      id: 438,
      firstName: "Jeannine",
      lastName: "Eckhart",
      email: "MOliver@amet.gov",
      phone: "(712)460-5431",
      description: "dolor dolor quis placerat sed pulvinar non amet at sed scelerisque morbi hendrerit rutrum porta quis eros at etiam lorem tortor sit elementum lectus aenean odio amet suspendisse egestas consequat suspendisse nec"
    },
    {
      id: 122,
      firstName: "Brooks",
      lastName: "Schlottman",
      email: "GSholtz@tincidunt.io",
      phone: "(537)874-8926",
      description: "sed tincidunt eros massa ante turpis at vel odio nec scelerisque vitae vitae convallis velit malesuada vestibulum magna vitae sit molestie at nullam tortor nec morbi vel lorem in sollicitudin odio orci"
    },
    {
      id: 108,
      firstName: "Regina",
      lastName: "Eaton",
      email: "LKatz@fringilla.io",
      phone: "(863)349-9485",
      description: "porttitor magna dolor magna ante tincidunt elit neque vitae quis aenean libero suspendisse fringilla tellus pharetra tellus vestibulum dolor dolor ipsum et mattis lorem placerat scelerisque mattis libero molestie lacus at neque"
    },
    {
      id: 630,
      firstName: "Tamika",
      lastName: "Faurest",
      email: "FLang@sagittis.io",
      phone: "(992)360-2453",
      description: "fringilla lorem consectetur sit placerat mattis vestibulum libero consequat vel porta etiam fringilla pulvinar vel tortor odio sollicitudin elementum egestas et sed sed augue mattis pretium ac sollicitudin vitae at lorem sed"
    },
    {
      id: 209,
      firstName: "Marshall",
      lastName: "Larue",
      email: "GBrown@dui.net",
      phone: "(640)668-2675",
      description: "suspendisse at sollicitudin vestibulum nunc aliquam odio sollicitudin sit malesuada aenean dolor neque libero placerat dolor ac sed molestie tincidunt lacus ipsum tortor molestie massa sagittis sed quis ipsum dolor nunc ipsum"
    },
    {
      id: 770,
      firstName: "Trisha",
      lastName: "Ghiselli",
      email: "JColin@neque.com",
      phone: "(720)789-6038",
      description: "porttitor tincidunt velit sit tortor morbi magna facilisis placerat aenean aenean porttitor mi et donec non aenean non ante convallis sollicitudin vel sed mi nunc nullam malesuada non adipiscing non lacus et"
    },
    {
      id: 635,
      firstName: "Christopher",
      lastName: "Dickey",
      email: "JClare@at.gov",
      phone: "(890)391-0076",
      description: "aliquam vel tincidunt lectus magna dolor etiam magna vestibulum id pulvinar magna vestibulum libero amet dolor tempor at ipsum ipsum odio turpis sed nunc id sit pretium magna scelerisque eros libero libero"
    },
    {
      id: 967,
      firstName: "Keesha",
      lastName: "Deno",
      email: "IDavid@sit.ly",
      phone: "(399)778-6752",
      description: "nec tellus tortor velit nullam placerat pretium sed nunc dolor pretium lacus in egestas aenean pulvinar dolor consequat sed pharetra placerat ac malesuada risus consequat consequat pulvinar augue in pulvinar adipiscing convallis"
    },
    {
      id: 690,
      firstName: "Adreta",
      lastName: "Seacrist",
      email: "PRitchie@egestas.ly",
      phone: "(976)910-3973",
      description: "sapien consectetur odio placerat sollicitudin molestie ac consequat sapien vitae magna nunc ac dolor non ac lacus nec nec quis et mi velit dui massa magna dolor aliquam aenean sed lectus placerat"
    },
    {
      id: 523,
      firstName: "Beverly",
      lastName: "Kish",
      email: "ARodenberger@nec.io",
      phone: "(826)857-4386",
      description: "nec id sed pharetra et sed mattis malesuada donec odio placerat vitae aliquam tincidunt molestie massa sagittis pulvinar sit neque egestas facilisis tincidunt ac dolor amet lacus orci ante lacus sed sit"
    },
    {
      id: 532,
      firstName: "Amanda",
      lastName: "Nguyen",
      email: "DHarvey@morbi.ly",
      phone: "(320)502-9218",
      description: "libero tincidunt suspendisse dui et molestie at sit fringilla sed sed augue neque dolor ac id lectus elit non sed nunc amet consequat neque velit rutrum nullam ac magna massa neque mi"
    },
    {
      id: 332,
      firstName: "Matthew",
      lastName: "Gipple",
      email: "LWelld@rutrum.gov",
      phone: "(517)134-0287",
      description: "vestibulum vestibulum elit etiam at augue ac non massa etiam convallis risus nunc placerat tempor dolor magna vestibulum at libero orci dolor porta curabitur aenean ante magna molestie molestie scelerisque sed aenean"
    },
    {
      id: 152,
      firstName: "Gladys",
      lastName: "Dellabadia",
      email: "SLee@consequat.net",
      phone: "(149)263-4445",
      description: "sit amet tincidunt augue libero nullam neque lectus lacus odio eros tortor augue magna aenean placerat ipsum tincidunt suspendisse consequat mi malesuada odio sit rutrum pharetra in magna magna ante tortor tincidunt"
    },
    {
      id: 995,
      firstName: "Azra",
      lastName: "Hencmann",
      email: "SAresti@non.net",
      phone: "(131)824-2960",
      description: "id placerat aenean at et et nunc lorem massa sit tempor dolor nunc at pretium vestibulum at dolor aliquam libero sollicitudin augue odio sed fringilla lacus elementum nec tincidunt massa sagittis pretium"
    },
    {
      id: 140,
      firstName: "Asher",
      lastName: "Mcdonald",
      email: "IHoepner@facilisis.gov",
      phone: "(860)868-9549",
      description: "tincidunt sollicitudin dolor ante malesuada etiam risus placerat suspendisse sed mi vitae pulvinar sit augue adipiscing mattis amet amet amet odio sagittis in suspendisse ac convallis id egestas pharetra sollicitudin placerat placerat"
    },
    {
      id: 996,
      firstName: "Aisha",
      lastName: "Price",
      email: "JSpellicy@pulvinar.org",
      phone: "(332)887-2908",
      description: "mi et sed aenean tempor mi pretium aliquam massa magna augue porta etiam etiam vestibulum eros placerat massa convallis et donec vitae consequat lacus mattis aliquam sed convallis dolor hendrerit vitae tempor"
    },
    {
      id: 816,
      firstName: "Martin",
      lastName: "Gillott",
      email: "RNutter@id.com",
      phone: "(496)854-4857",
      description: "sit lacus at magna eros elementum lectus sagittis sed sed scelerisque sed tempor porttitor suspendisse sed convallis tempor amet suspendisse tortor tortor velit tellus dolor quis tellus porttitor ac nunc sit vitae"
    },
    {
      id: 314,
      firstName: "Brenda",
      lastName: "Chapman",
      email: "CHickey@odio.io",
      phone: "(351)198-5130",
      description: "magna placerat et velit quis risus elit lacus at libero odio morbi aenean sed sollicitudin nunc convallis risus nec dolor vestibulum adipiscing magna hendrerit porta in massa sapien quis donec augue id"
    },
    {
      id: 718,
      firstName: "Jodene",
      lastName: "Borgford",
      email: "CDoerfler@dolor.gov",
      phone: "(188)133-6775",
      description: "aliquam vel nullam in at dui massa at donec elementum vitae vestibulum vitae amet vestibulum eget tincidunt lacus mi dui placerat vestibulum vestibulum magna facilisis ac at magna odio fringilla ipsum vel"
    },
    {
      id: 436,
      firstName: "Karyn",
      lastName: "Nolan",
      email: "AFlack@convallis.ly",
      phone: "(392)542-2559",
      description: "dui pulvinar vel tincidunt suspendisse amet tincidunt dolor pulvinar nunc vitae tellus sed velit lacus dui turpis vestibulum velit nunc convallis sit augue sit molestie hendrerit massa dolor massa etiam ipsum fringilla"
    },
    {
      id: 848,
      firstName: "Venus",
      lastName: "Harrington",
      email: "JValkanet@tempor.ly",
      phone: "(689)843-1903",
      description: "consectetur massa dui dolor ac eros lectus mi ante sit augue mi eros eget sit amet sagittis elit non aliquam magna massa magna sed elit neque pulvinar at mattis nullam lacus magna"
    },
    {
      id: 658,
      firstName: "Veneta",
      lastName: "Schwartzberg",
      email: "KBarnes@lorem.io",
      phone: "(385)848-8902",
      description: "pulvinar vitae aliquam ipsum ac non sollicitudin turpis lacus vitae consequat nec pretium sit sed at consectetur tempor turpis molestie aliquam fringilla ante sollicitudin sollicitudin placerat ipsum augue eget vel id vitae"
    },
    {
      id: 611,
      firstName: "Marilynn",
      lastName: "Bommi",
      email: "KHauler@lacus.net",
      phone: "(148)925-3353",
      description: "adipiscing ante pulvinar massa facilisis sagittis aenean ac dolor non ante placerat mi nunc amet aliquam adipiscing aliquam vitae eros massa quis aliquam sit ac aliquam aenean nec morbi odio pretium porta"
    },
    {
      id: 261,
      firstName: "Natasha",
      lastName: "Wooten",
      email: "GSpataro@eros.io",
      phone: "(192)490-6420",
      description: "malesuada risus tortor elit mattis molestie fringilla vestibulum mattis magna porta tincidunt massa aenean at tincidunt quis quis mattis consequat nec facilisis magna facilisis lacus aenean elementum dolor sit placerat dolor sed"
    },
    {
      id: 706,
      firstName: "Jacquie",
      lastName: "Raslich",
      email: "VTuttle@placerat.io",
      phone: "(693)663-7250",
      description: "libero sollicitudin dolor ante tempor vel lacus nec dolor mattis lacus vel lectus tincidunt sollicitudin nullam ac elementum magna mi sed libero mattis nec tellus nec placerat malesuada consequat dolor nec rutrum"
    }
  ];
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
