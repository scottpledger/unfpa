import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {ProjectTheme, ProjectFormat, Project, Country, Language} from './data';

export const THEMES: ProjectTheme[] = [
  {
    id: 'srh',
    imageSource: "resources/images/Sexual_Reproductive_Health.jpg",
    name: 'Sexual & Reproductive Health',
    topics: [
      "Family planning",
      "HIV & AIDS",
      "Maternal health",
      "Midwifery",
      "Obstetric fistula",
      "Sexual & reproductive health"
    ]
  },
  {
    id: 'yp',
    imageSource: "resources/images/Young_People.jpg",
    name: 'Young People',
    topics: [
      "Adolescent pregnancy",
      "Child marriage",
      "Comprehensive sexuality education",
      "Youth leadership & participation"
    ]
  },
  {
    id: 'hrge',
    imageSource: "resources/images/Human_Rights_Gender_Equality.jpg",
    name: 'Human Rights & Gender Equality',
    topics: [
      "Engaging men & boys",
      "Female genital mutilation",
      "Gender-based violence",
      "Gender equality",
      "Human rights",
      "Gender-biased sex selection"
    ]
  },
  {
    id: 'pm',
    imageSource: "resources/images/Population_Matters.jpg",
    name: 'Population Matters',
    topics: [
      "Ageing",
      "Census",
      "Climate change",
      "Demographic dividend",
      "Migration",
      "Urbanization",
      "Population Trends"
    ]
  }
];

export const FORMATS: ProjectFormat[] = [
  {
    id: 'mo',
    imageSource: "resources/images/Media_Oriented.jpg",
    name: 'Media Oriented'
  },
  {
    id: 'tp',
    imageSource: "resources/images/Training_Programs.jpg",
    name: 'Training Programs'
  },
  {
    id: 'w',
    imageSource: "resources/images/Workshops.jpg",
    name: 'Workshops'
  },
  {
    id: 'sra',
    imageSource: "resources/images/Resource_Allocation.jpg",
    name: 'Supplies / Resource Allocation'
  },
  {
    id: 'cmf',
    imageSource: "resources/images/Credit_Micro_Finance.jpg",
    name: 'Credit / MicroFinance'
  },
  {
    id: 'ha',
    imageSource: "resources/images/Humanitarian_Assistance.jpg",
    name: 'Humanitarian Assistance'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'frs',
    imageSource: "resources/images/fathers_radio_show.jpg",
    name: 'Fathers Radio Show',
    country: 'Georgia',
    themes: [THEMES[0], THEMES[1]],
    formats: [FORMATS[0]],
    startDate: new Date(2015, 1, 5),
    endDate: new Date(2016, 11, 08),
    description: "Do the thing",
    contacts: "a@b.com",
    budget: 10000,
    languages: "Gungan",
    partners: "WHO",
    timeFrame: "soon",
    status: "Awaiting Funding",
    checklist: [
      {
        checked: true,
        name: 'Access to TV'
      },
      {
        checked: false,
        name: 'TV Broadcasting Network Partner'
      },
      {
        checked: false,
        name: 'Film Production Team'
      },
      {
        checked: false,
        name: 'Minimum 6 months (Implementation Period) '
      },
      {
        checked: false,
        name: 'Gender Expert on your Team'
      },
      {
        checked: false,
        name: 'Project Manager'
      },
      {
        checked: false,
        name: 'Government Support'
      },
      {
        checked: false,
        name: 'Health Care'
      }
    ],
    aspects: [
      {
        relevance: 1,
        name: 'Emulate reality TV',
        multiplier: 0
      },
      {
        relevance: 1,
        name: 'See celebrities as role models',
        multiplier: 0
      },
      {
        relevance: 1,
        name: 'Have a culture of watching TV',
        multiplier: 0
      },
      {
        relevance: 3,
        name: 'Lack male participation in parenting',
        multiplier: 0
      },
      {
        relevance: 2,
        name: 'Adhere to traditional gender roles',
        multiplier: 0
      }
    ]
  },
];

// Copied from http://country.io/names.json
const COUNTRY_CODE_TO_NAME = {"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", "TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland", "IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"};
const LANGUAGE_LIST: Language[] = [
  {
    "name": "Afar",
    "iso6392B": "﻿aar",
    "iso6392T": null,
    "iso6391": "aa"
  },
  {
    "name": "Abkhazian",
    "iso6392B": "abk",
    "iso6392T": null,
    "iso6391": "ab"
  },
  {
    "name": "Achinese",
    "iso6392B": "ace",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Acoli",
    "iso6392B": "ach",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Adangme",
    "iso6392B": "ada",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Adyghe; Adygei",
    "iso6392B": "ady",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Afro-Asiatic languages",
    "iso6392B": "afa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Afrihili",
    "iso6392B": "afh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Afrikaans",
    "iso6392B": "afr",
    "iso6392T": null,
    "iso6391": "af"
  },
  {
    "name": "Ainu",
    "iso6392B": "ain",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Akan",
    "iso6392B": "aka",
    "iso6392T": null,
    "iso6391": "ak"
  },
  {
    "name": "Akkadian",
    "iso6392B": "akk",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Albanian",
    "iso6392B": "alb",
    "iso6392T": "sqi",
    "iso6391": "sq"
  },
  {
    "name": "Aleut",
    "iso6392B": "ale",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Algonquian languages",
    "iso6392B": "alg",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Southern Altai",
    "iso6392B": "alt",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Amharic",
    "iso6392B": "amh",
    "iso6392T": null,
    "iso6391": "am"
  },
  {
    "name": "English, Old (ca.450-1100)",
    "iso6392B": "ang",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Angika",
    "iso6392B": "anp",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Apache languages",
    "iso6392B": "apa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Arabic",
    "iso6392B": "ara",
    "iso6392T": null,
    "iso6391": "ar"
  },
  {
    "name": "Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)",
    "iso6392B": "arc",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Aragonese",
    "iso6392B": "arg",
    "iso6392T": null,
    "iso6391": "an"
  },
  {
    "name": "Armenian",
    "iso6392B": "arm",
    "iso6392T": "hye",
    "iso6391": "hy"
  },
  {
    "name": "Mapudungun; Mapuche",
    "iso6392B": "arn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Arapaho",
    "iso6392B": "arp",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Artificial languages",
    "iso6392B": "art",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Arawak",
    "iso6392B": "arw",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Assamese",
    "iso6392B": "asm",
    "iso6392T": null,
    "iso6391": "as"
  },
  {
    "name": "Asturian; Bable; Leonese; Asturleonese",
    "iso6392B": "ast",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Athapascan languages",
    "iso6392B": "ath",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Australian languages",
    "iso6392B": "aus",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Avaric",
    "iso6392B": "ava",
    "iso6392T": null,
    "iso6391": "av"
  },
  {
    "name": "Avestan",
    "iso6392B": "ave",
    "iso6392T": null,
    "iso6391": "ae"
  },
  {
    "name": "Awadhi",
    "iso6392B": "awa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Aymara",
    "iso6392B": "aym",
    "iso6392T": null,
    "iso6391": "ay"
  },
  {
    "name": "Azerbaijani",
    "iso6392B": "aze",
    "iso6392T": null,
    "iso6391": "az"
  },
  {
    "name": "Banda languages",
    "iso6392B": "bad",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bamileke languages",
    "iso6392B": "bai",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bashkir",
    "iso6392B": "bak",
    "iso6392T": null,
    "iso6391": "ba"
  },
  {
    "name": "Baluchi",
    "iso6392B": "bal",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bambara",
    "iso6392B": "bam",
    "iso6392T": null,
    "iso6391": "bm"
  },
  {
    "name": "Balinese",
    "iso6392B": "ban",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Basque",
    "iso6392B": "baq",
    "iso6392T": "eus",
    "iso6391": "eu"
  },
  {
    "name": "Basa",
    "iso6392B": "bas",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Baltic languages",
    "iso6392B": "bat",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Beja; Bedawiyet",
    "iso6392B": "bej",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Belarusian",
    "iso6392B": "bel",
    "iso6392T": null,
    "iso6391": "be"
  },
  {
    "name": "Bemba",
    "iso6392B": "bem",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bengali",
    "iso6392B": "ben",
    "iso6392T": null,
    "iso6391": "bn"
  },
  {
    "name": "Berber languages",
    "iso6392B": "ber",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bhojpuri",
    "iso6392B": "bho",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bihari languages",
    "iso6392B": "bih",
    "iso6392T": null,
    "iso6391": "bh"
  },
  {
    "name": "Bikol",
    "iso6392B": "bik",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bini; Edo",
    "iso6392B": "bin",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bislama",
    "iso6392B": "bis",
    "iso6392T": null,
    "iso6391": "bi"
  },
  {
    "name": "Siksika",
    "iso6392B": "bla",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bantu (Other)",
    "iso6392B": "bnt",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bosnian",
    "iso6392B": "bos",
    "iso6392T": null,
    "iso6391": "bs"
  },
  {
    "name": "Braj",
    "iso6392B": "bra",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Breton",
    "iso6392B": "bre",
    "iso6392T": null,
    "iso6391": "br"
  },
  {
    "name": "Batak languages",
    "iso6392B": "btk",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Buriat",
    "iso6392B": "bua",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Buginese",
    "iso6392B": "bug",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Bulgarian",
    "iso6392B": "bul",
    "iso6392T": null,
    "iso6391": "bg"
  },
  {
    "name": "Burmese",
    "iso6392B": "bur",
    "iso6392T": "mya",
    "iso6391": "my"
  },
  {
    "name": "Blin; Bilin",
    "iso6392B": "byn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Caddo",
    "iso6392B": "cad",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Central American Indian languages",
    "iso6392B": "cai",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Galibi Carib",
    "iso6392B": "car",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Catalan; Valencian",
    "iso6392B": "cat",
    "iso6392T": null,
    "iso6391": "ca"
  },
  {
    "name": "Caucasian languages",
    "iso6392B": "cau",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Cebuano",
    "iso6392B": "ceb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Celtic languages",
    "iso6392B": "cel",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Chamorro",
    "iso6392B": "cha",
    "iso6392T": null,
    "iso6391": "ch"
  },
  {
    "name": "Chibcha",
    "iso6392B": "chb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Chechen",
    "iso6392B": "che",
    "iso6392T": null,
    "iso6391": "ce"
  },
  {
    "name": "Chagatai",
    "iso6392B": "chg",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Chinese",
    "iso6392B": "chi",
    "iso6392T": "zho",
    "iso6391": "zh"
  },
  {
    "name": "Chuukese",
    "iso6392B": "chk",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mari",
    "iso6392B": "chm",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Chinook jargon",
    "iso6392B": "chn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Choctaw",
    "iso6392B": "cho",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Chipewyan; Dene Suline",
    "iso6392B": "chp",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Cherokee",
    "iso6392B": "chr",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
    "iso6392B": "chu",
    "iso6392T": null,
    "iso6391": "cu"
  },
  {
    "name": "Chuvash",
    "iso6392B": "chv",
    "iso6392T": null,
    "iso6391": "cv"
  },
  {
    "name": "Cheyenne",
    "iso6392B": "chy",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Chamic languages",
    "iso6392B": "cmc",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Coptic",
    "iso6392B": "cop",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Cornish",
    "iso6392B": "cor",
    "iso6392T": null,
    "iso6391": "kw"
  },
  {
    "name": "Corsican",
    "iso6392B": "cos",
    "iso6392T": null,
    "iso6391": "co"
  },
  {
    "name": "Creoles and pidgins, English based",
    "iso6392B": "cpe",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Creoles and pidgins, French-based ",
    "iso6392B": "cpf",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Creoles and pidgins, Portuguese-based ",
    "iso6392B": "cpp",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Cree",
    "iso6392B": "cre",
    "iso6392T": null,
    "iso6391": "cr"
  },
  {
    "name": "Crimean Tatar; Crimean Turkish",
    "iso6392B": "crh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Creoles and pidgins ",
    "iso6392B": "crp",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kashubian",
    "iso6392B": "csb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Cushitic languages",
    "iso6392B": "cus",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Czech",
    "iso6392B": "cze",
    "iso6392T": "ces",
    "iso6391": "cs"
  },
  {
    "name": "Dakota",
    "iso6392B": "dak",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Danish",
    "iso6392B": "dan",
    "iso6392T": null,
    "iso6391": "da"
  },
  {
    "name": "Dargwa",
    "iso6392B": "dar",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Land Dayak languages",
    "iso6392B": "day",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Delaware",
    "iso6392B": "del",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Slave (Athapascan)",
    "iso6392B": "den",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Dogrib",
    "iso6392B": "dgr",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Dinka",
    "iso6392B": "din",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Divehi; Dhivehi; Maldivian",
    "iso6392B": "div",
    "iso6392T": null,
    "iso6391": "dv"
  },
  {
    "name": "Dogri",
    "iso6392B": "doi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Dravidian languages",
    "iso6392B": "dra",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Lower Sorbian",
    "iso6392B": "dsb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Duala",
    "iso6392B": "dua",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Dutch, Middle (ca.1050-1350)",
    "iso6392B": "dum",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Dutch; Flemish",
    "iso6392B": "dut",
    "iso6392T": "nld",
    "iso6391": "nl"
  },
  {
    "name": "Dyula",
    "iso6392B": "dyu",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Dzongkha",
    "iso6392B": "dzo",
    "iso6392T": null,
    "iso6391": "dz"
  },
  {
    "name": "Efik",
    "iso6392B": "efi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Egyptian (Ancient)",
    "iso6392B": "egy",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Ekajuk",
    "iso6392B": "eka",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Elamite",
    "iso6392B": "elx",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "English",
    "iso6392B": "eng",
    "iso6392T": null,
    "iso6391": "en"
  },
  {
    "name": "English, Middle (1100-1500)",
    "iso6392B": "enm",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Esperanto",
    "iso6392B": "epo",
    "iso6392T": null,
    "iso6391": "eo"
  },
  {
    "name": "Estonian",
    "iso6392B": "est",
    "iso6392T": null,
    "iso6391": "et"
  },
  {
    "name": "Ewe",
    "iso6392B": "ewe",
    "iso6392T": null,
    "iso6391": "ee"
  },
  {
    "name": "Ewondo",
    "iso6392B": "ewo",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Fang",
    "iso6392B": "fan",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Faroese",
    "iso6392B": "fao",
    "iso6392T": null,
    "iso6391": "fo"
  },
  {
    "name": "Fanti",
    "iso6392B": "fat",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Fijian",
    "iso6392B": "fij",
    "iso6392T": null,
    "iso6391": "fj"
  },
  {
    "name": "Filipino; Pilipino",
    "iso6392B": "fil",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Finnish",
    "iso6392B": "fin",
    "iso6392T": null,
    "iso6391": "fi"
  },
  {
    "name": "Finno-Ugrian languages",
    "iso6392B": "fiu",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Fon",
    "iso6392B": "fon",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "French",
    "iso6392B": "fre",
    "iso6392T": "fra",
    "iso6391": "fr"
  },
  {
    "name": "French, Middle (ca.1400-1600)",
    "iso6392B": "frm",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "French, Old (842-ca.1400)",
    "iso6392B": "fro",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Northern Frisian",
    "iso6392B": "frr",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Eastern Frisian",
    "iso6392B": "frs",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Western Frisian",
    "iso6392B": "fry",
    "iso6392T": null,
    "iso6391": "fy"
  },
  {
    "name": "Fulah",
    "iso6392B": "ful",
    "iso6392T": null,
    "iso6391": "ff"
  },
  {
    "name": "Friulian",
    "iso6392B": "fur",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Ga",
    "iso6392B": "gaa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Gayo",
    "iso6392B": "gay",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Gbaya",
    "iso6392B": "gba",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Germanic languages",
    "iso6392B": "gem",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Georgian",
    "iso6392B": "geo",
    "iso6392T": "kat",
    "iso6391": "ka"
  },
  {
    "name": "German",
    "iso6392B": "ger",
    "iso6392T": "deu",
    "iso6391": "de"
  },
  {
    "name": "Geez",
    "iso6392B": "gez",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Gilbertese",
    "iso6392B": "gil",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Gaelic; Scottish Gaelic",
    "iso6392B": "gla",
    "iso6392T": null,
    "iso6391": "gd"
  },
  {
    "name": "Irish",
    "iso6392B": "gle",
    "iso6392T": null,
    "iso6391": "ga"
  },
  {
    "name": "Galician",
    "iso6392B": "glg",
    "iso6392T": null,
    "iso6391": "gl"
  },
  {
    "name": "Manx",
    "iso6392B": "glv",
    "iso6392T": null,
    "iso6391": "gv"
  },
  {
    "name": "German, Middle High (ca.1050-1500)",
    "iso6392B": "gmh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "German, Old High (ca.750-1050)",
    "iso6392B": "goh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Gondi",
    "iso6392B": "gon",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Gorontalo",
    "iso6392B": "gor",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Gothic",
    "iso6392B": "got",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Grebo",
    "iso6392B": "grb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Greek, Ancient (to 1453)",
    "iso6392B": "grc",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Greek, Modern (1453-)",
    "iso6392B": "gre",
    "iso6392T": "ell",
    "iso6391": "el"
  },
  {
    "name": "Guarani",
    "iso6392B": "grn",
    "iso6392T": null,
    "iso6391": "gn"
  },
  {
    "name": "Swiss German; Alemannic; Alsatian",
    "iso6392B": "gsw",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Gujarati",
    "iso6392B": "guj",
    "iso6392T": null,
    "iso6391": "gu"
  },
  {
    "name": "Gwich'in",
    "iso6392B": "gwi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Haida",
    "iso6392B": "hai",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Haitian; Haitian Creole",
    "iso6392B": "hat",
    "iso6392T": null,
    "iso6391": "ht"
  },
  {
    "name": "Hausa",
    "iso6392B": "hau",
    "iso6392T": null,
    "iso6391": "ha"
  },
  {
    "name": "Hawaiian",
    "iso6392B": "haw",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Hebrew",
    "iso6392B": "heb",
    "iso6392T": null,
    "iso6391": "he"
  },
  {
    "name": "Herero",
    "iso6392B": "her",
    "iso6392T": null,
    "iso6391": "hz"
  },
  {
    "name": "Hiligaynon",
    "iso6392B": "hil",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Himachali languages; Western Pahari languages",
    "iso6392B": "him",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Hindi",
    "iso6392B": "hin",
    "iso6392T": null,
    "iso6391": "hi"
  },
  {
    "name": "Hittite",
    "iso6392B": "hit",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Hmong; Mong",
    "iso6392B": "hmn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Hiri Motu",
    "iso6392B": "hmo",
    "iso6392T": null,
    "iso6391": "ho"
  },
  {
    "name": "Croatian",
    "iso6392B": "hrv",
    "iso6392T": null,
    "iso6391": "hr"
  },
  {
    "name": "Upper Sorbian",
    "iso6392B": "hsb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Hungarian",
    "iso6392B": "hun",
    "iso6392T": null,
    "iso6391": "hu"
  },
  {
    "name": "Hupa",
    "iso6392B": "hup",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Iban",
    "iso6392B": "iba",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Igbo",
    "iso6392B": "ibo",
    "iso6392T": null,
    "iso6391": "ig"
  },
  {
    "name": "Icelandic",
    "iso6392B": "ice",
    "iso6392T": "isl",
    "iso6391": "is"
  },
  {
    "name": "Ido",
    "iso6392B": "ido",
    "iso6392T": null,
    "iso6391": "io"
  },
  {
    "name": "Sichuan Yi; Nuosu",
    "iso6392B": "iii",
    "iso6392T": null,
    "iso6391": "ii"
  },
  {
    "name": "Ijo languages",
    "iso6392B": "ijo",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Inuktitut",
    "iso6392B": "iku",
    "iso6392T": null,
    "iso6391": "iu"
  },
  {
    "name": "Interlingue; Occidental",
    "iso6392B": "ile",
    "iso6392T": null,
    "iso6391": "ie"
  },
  {
    "name": "Iloko",
    "iso6392B": "ilo",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Interlingua (International Auxiliary Language Association)",
    "iso6392B": "ina",
    "iso6392T": null,
    "iso6391": "ia"
  },
  {
    "name": "Indic languages",
    "iso6392B": "inc",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Indonesian",
    "iso6392B": "ind",
    "iso6392T": null,
    "iso6391": "id"
  },
  {
    "name": "Indo-European languages",
    "iso6392B": "ine",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Ingush",
    "iso6392B": "inh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Inupiaq",
    "iso6392B": "ipk",
    "iso6392T": null,
    "iso6391": "ik"
  },
  {
    "name": "Iranian languages",
    "iso6392B": "ira",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Iroquoian languages",
    "iso6392B": "iro",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Italian",
    "iso6392B": "ita",
    "iso6392T": null,
    "iso6391": "it"
  },
  {
    "name": "Javanese",
    "iso6392B": "jav",
    "iso6392T": null,
    "iso6391": "jv"
  },
  {
    "name": "Lojban",
    "iso6392B": "jbo",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Japanese",
    "iso6392B": "jpn",
    "iso6392T": null,
    "iso6391": "ja"
  },
  {
    "name": "Judeo-Persian",
    "iso6392B": "jpr",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Judeo-Arabic",
    "iso6392B": "jrb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kara-Kalpak",
    "iso6392B": "kaa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kabyle",
    "iso6392B": "kab",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kachin; Jingpho",
    "iso6392B": "kac",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kalaallisut; Greenlandic",
    "iso6392B": "kal",
    "iso6392T": null,
    "iso6391": "kl"
  },
  {
    "name": "Kamba",
    "iso6392B": "kam",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kannada",
    "iso6392B": "kan",
    "iso6392T": null,
    "iso6391": "kn"
  },
  {
    "name": "Karen languages",
    "iso6392B": "kar",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kashmiri",
    "iso6392B": "kas",
    "iso6392T": null,
    "iso6391": "ks"
  },
  {
    "name": "Kanuri",
    "iso6392B": "kau",
    "iso6392T": null,
    "iso6391": "kr"
  },
  {
    "name": "Kawi",
    "iso6392B": "kaw",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kazakh",
    "iso6392B": "kaz",
    "iso6392T": null,
    "iso6391": "kk"
  },
  {
    "name": "Kabardian",
    "iso6392B": "kbd",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Khasi",
    "iso6392B": "kha",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Khoisan languages",
    "iso6392B": "khi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Central Khmer",
    "iso6392B": "khm",
    "iso6392T": null,
    "iso6391": "km"
  },
  {
    "name": "Khotanese; Sakan",
    "iso6392B": "kho",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kikuyu; Gikuyu",
    "iso6392B": "kik",
    "iso6392T": null,
    "iso6391": "ki"
  },
  {
    "name": "Kinyarwanda",
    "iso6392B": "kin",
    "iso6392T": null,
    "iso6391": "rw"
  },
  {
    "name": "Kirghiz; Kyrgyz",
    "iso6392B": "kir",
    "iso6392T": null,
    "iso6391": "ky"
  },
  {
    "name": "Kimbundu",
    "iso6392B": "kmb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Konkani",
    "iso6392B": "kok",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Komi",
    "iso6392B": "kom",
    "iso6392T": null,
    "iso6391": "kv"
  },
  {
    "name": "Kongo",
    "iso6392B": "kon",
    "iso6392T": null,
    "iso6391": "kg"
  },
  {
    "name": "Korean",
    "iso6392B": "kor",
    "iso6392T": null,
    "iso6391": "ko"
  },
  {
    "name": "Kosraean",
    "iso6392B": "kos",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kpelle",
    "iso6392B": "kpe",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Karachay-Balkar",
    "iso6392B": "krc",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Karelian",
    "iso6392B": "krl",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kru languages",
    "iso6392B": "kro",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kurukh",
    "iso6392B": "kru",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kuanyama; Kwanyama",
    "iso6392B": "kua",
    "iso6392T": null,
    "iso6391": "kj"
  },
  {
    "name": "Kumyk",
    "iso6392B": "kum",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Kurdish",
    "iso6392B": "kur",
    "iso6392T": null,
    "iso6391": "ku"
  },
  {
    "name": "Kutenai",
    "iso6392B": "kut",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Ladino",
    "iso6392B": "lad",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Lahnda",
    "iso6392B": "lah",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Lamba",
    "iso6392B": "lam",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Lao",
    "iso6392B": "lao",
    "iso6392T": null,
    "iso6391": "lo"
  },
  {
    "name": "Latin",
    "iso6392B": "lat",
    "iso6392T": null,
    "iso6391": "la"
  },
  {
    "name": "Latvian",
    "iso6392B": "lav",
    "iso6392T": null,
    "iso6391": "lv"
  },
  {
    "name": "Lezghian",
    "iso6392B": "lez",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Limburgan; Limburger; Limburgish",
    "iso6392B": "lim",
    "iso6392T": null,
    "iso6391": "li"
  },
  {
    "name": "Lingala",
    "iso6392B": "lin",
    "iso6392T": null,
    "iso6391": "ln"
  },
  {
    "name": "Lithuanian",
    "iso6392B": "lit",
    "iso6392T": null,
    "iso6391": "lt"
  },
  {
    "name": "Mongo",
    "iso6392B": "lol",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Lozi",
    "iso6392B": "loz",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Luxembourgish; Letzeburgesch",
    "iso6392B": "ltz",
    "iso6392T": null,
    "iso6391": "lb"
  },
  {
    "name": "Luba-Lulua",
    "iso6392B": "lua",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Luba-Katanga",
    "iso6392B": "lub",
    "iso6392T": null,
    "iso6391": "lu"
  },
  {
    "name": "Ganda",
    "iso6392B": "lug",
    "iso6392T": null,
    "iso6391": "lg"
  },
  {
    "name": "Luiseno",
    "iso6392B": "lui",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Lunda",
    "iso6392B": "lun",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Luo (Kenya and Tanzania)",
    "iso6392B": "luo",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Lushai",
    "iso6392B": "lus",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Macedonian",
    "iso6392B": "mac",
    "iso6392T": "mkd",
    "iso6391": "mk"
  },
  {
    "name": "Madurese",
    "iso6392B": "mad",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Magahi",
    "iso6392B": "mag",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Marshallese",
    "iso6392B": "mah",
    "iso6392T": null,
    "iso6391": "mh"
  },
  {
    "name": "Maithili",
    "iso6392B": "mai",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Makasar",
    "iso6392B": "mak",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Malayalam",
    "iso6392B": "mal",
    "iso6392T": null,
    "iso6391": "ml"
  },
  {
    "name": "Mandingo",
    "iso6392B": "man",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Maori",
    "iso6392B": "mao",
    "iso6392T": "mri",
    "iso6391": "mi"
  },
  {
    "name": "Austronesian languages",
    "iso6392B": "map",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Marathi",
    "iso6392B": "mar",
    "iso6392T": null,
    "iso6391": "mr"
  },
  {
    "name": "Masai",
    "iso6392B": "mas",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Malay",
    "iso6392B": "may",
    "iso6392T": "msa",
    "iso6391": "ms"
  },
  {
    "name": "Moksha",
    "iso6392B": "mdf",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mandar",
    "iso6392B": "mdr",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mende",
    "iso6392B": "men",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Irish, Middle (900-1200)",
    "iso6392B": "mga",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mi'kmaq; Micmac",
    "iso6392B": "mic",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Minangkabau",
    "iso6392B": "min",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Uncoded languages",
    "iso6392B": "mis",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mon-Khmer languages",
    "iso6392B": "mkh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Malagasy",
    "iso6392B": "mlg",
    "iso6392T": null,
    "iso6391": "mg"
  },
  {
    "name": "Maltese",
    "iso6392B": "mlt",
    "iso6392T": null,
    "iso6391": "mt"
  },
  {
    "name": "Manchu",
    "iso6392B": "mnc",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Manipuri",
    "iso6392B": "mni",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Manobo languages",
    "iso6392B": "mno",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mohawk",
    "iso6392B": "moh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mongolian",
    "iso6392B": "mon",
    "iso6392T": null,
    "iso6391": "mn"
  },
  {
    "name": "Mossi",
    "iso6392B": "mos",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Multiple languages",
    "iso6392B": "mul",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Munda languages",
    "iso6392B": "mun",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Creek",
    "iso6392B": "mus",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mirandese",
    "iso6392B": "mwl",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Marwari",
    "iso6392B": "mwr",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Mayan languages",
    "iso6392B": "myn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Erzya",
    "iso6392B": "myv",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nahuatl languages",
    "iso6392B": "nah",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "North American Indian languages",
    "iso6392B": "nai",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Neapolitan",
    "iso6392B": "nap",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nauru",
    "iso6392B": "nau",
    "iso6392T": null,
    "iso6391": "na"
  },
  {
    "name": "Navajo; Navaho",
    "iso6392B": "nav",
    "iso6392T": null,
    "iso6391": "nv"
  },
  {
    "name": "Ndebele, South; South Ndebele",
    "iso6392B": "nbl",
    "iso6392T": null,
    "iso6391": "nr"
  },
  {
    "name": "Ndebele, North; North Ndebele",
    "iso6392B": "nde",
    "iso6392T": null,
    "iso6391": "nd"
  },
  {
    "name": "Ndonga",
    "iso6392B": "ndo",
    "iso6392T": null,
    "iso6391": "ng"
  },
  {
    "name": "Low German; Low Saxon; German, Low; Saxon, Low",
    "iso6392B": "nds",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nepali",
    "iso6392B": "nep",
    "iso6392T": null,
    "iso6391": "ne"
  },
  {
    "name": "Nepal Bhasa; Newari",
    "iso6392B": "new",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nias",
    "iso6392B": "nia",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Niger-Kordofanian languages",
    "iso6392B": "nic",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Niuean",
    "iso6392B": "niu",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Norwegian Nynorsk; Nynorsk, Norwegian",
    "iso6392B": "nno",
    "iso6392T": null,
    "iso6391": "nn"
  },
  {
    "name": "Bokmål, Norwegian; Norwegian Bokmål",
    "iso6392B": "nob",
    "iso6392T": null,
    "iso6391": "nb"
  },
  {
    "name": "Nogai",
    "iso6392B": "nog",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Norse, Old",
    "iso6392B": "non",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Norwegian",
    "iso6392B": "nor",
    "iso6392T": null,
    "iso6391": "no"
  },
  {
    "name": "N'Ko",
    "iso6392B": "nqo",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Pedi; Sepedi; Northern Sotho",
    "iso6392B": "nso",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nubian languages",
    "iso6392B": "nub",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Classical Newari; Old Newari; Classical Nepal Bhasa",
    "iso6392B": "nwc",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Chichewa; Chewa; Nyanja",
    "iso6392B": "nya",
    "iso6392T": null,
    "iso6391": "ny"
  },
  {
    "name": "Nyamwezi",
    "iso6392B": "nym",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nyankole",
    "iso6392B": "nyn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nyoro",
    "iso6392B": "nyo",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nzima",
    "iso6392B": "nzi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Occitan (post 1500); Provençal",
    "iso6392B": "oci",
    "iso6392T": null,
    "iso6391": "oc"
  },
  {
    "name": "Ojibwa",
    "iso6392B": "oji",
    "iso6392T": null,
    "iso6391": "oj"
  },
  {
    "name": "Oriya",
    "iso6392B": "ori",
    "iso6392T": null,
    "iso6391": "or"
  },
  {
    "name": "Oromo",
    "iso6392B": "orm",
    "iso6392T": null,
    "iso6391": "om"
  },
  {
    "name": "Osage",
    "iso6392B": "osa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Ossetian; Ossetic",
    "iso6392B": "oss",
    "iso6392T": null,
    "iso6391": "os"
  },
  {
    "name": "Turkish, Ottoman (1500-1928)",
    "iso6392B": "ota",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Otomian languages",
    "iso6392B": "oto",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Papuan languages",
    "iso6392B": "paa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Pangasinan",
    "iso6392B": "pag",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Pahlavi",
    "iso6392B": "pal",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Pampanga; Kapampangan",
    "iso6392B": "pam",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Panjabi; Punjabi",
    "iso6392B": "pan",
    "iso6392T": null,
    "iso6391": "pa"
  },
  {
    "name": "Papiamento",
    "iso6392B": "pap",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Palauan",
    "iso6392B": "pau",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Persian, Old (ca.600-400 B.C.)",
    "iso6392B": "peo",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Persian",
    "iso6392B": "per",
    "iso6392T": "fas",
    "iso6391": "fa"
  },
  {
    "name": "Philippine languages",
    "iso6392B": "phi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Phoenician",
    "iso6392B": "phn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Pali",
    "iso6392B": "pli",
    "iso6392T": null,
    "iso6391": "pi"
  },
  {
    "name": "Polish",
    "iso6392B": "pol",
    "iso6392T": null,
    "iso6391": "pl"
  },
  {
    "name": "Pohnpeian",
    "iso6392B": "pon",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Portuguese",
    "iso6392B": "por",
    "iso6392T": null,
    "iso6391": "pt"
  },
  {
    "name": "Prakrit languages",
    "iso6392B": "pra",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Provençal, Old (to 1500)",
    "iso6392B": "pro",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Pushto; Pashto",
    "iso6392B": "pus",
    "iso6392T": null,
    "iso6391": "ps"
  },
  {
    "name": "Reserved for local use",
    "iso6392B": "qaa-qtz",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Quechua",
    "iso6392B": "que",
    "iso6392T": null,
    "iso6391": "qu"
  },
  {
    "name": "Rajasthani",
    "iso6392B": "raj",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Rapanui",
    "iso6392B": "rap",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Rarotongan; Cook Islands Maori",
    "iso6392B": "rar",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Romance languages",
    "iso6392B": "roa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Romansh",
    "iso6392B": "roh",
    "iso6392T": null,
    "iso6391": "rm"
  },
  {
    "name": "Romany",
    "iso6392B": "rom",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Romanian; Moldavian; Moldovan",
    "iso6392B": "rum",
    "iso6392T": "ron",
    "iso6391": "ro"
  },
  {
    "name": "Rundi",
    "iso6392B": "run",
    "iso6392T": null,
    "iso6391": "rn"
  },
  {
    "name": "Aromanian; Arumanian; Macedo-Romanian",
    "iso6392B": "rup",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Russian",
    "iso6392B": "rus",
    "iso6392T": null,
    "iso6391": "ru"
  },
  {
    "name": "Sandawe",
    "iso6392B": "sad",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sango",
    "iso6392B": "sag",
    "iso6392T": null,
    "iso6391": "sg"
  },
  {
    "name": "Yakut",
    "iso6392B": "sah",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "South American Indian (Other)",
    "iso6392B": "sai",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Salishan languages",
    "iso6392B": "sal",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Samaritan Aramaic",
    "iso6392B": "sam",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sanskrit",
    "iso6392B": "san",
    "iso6392T": null,
    "iso6391": "sa"
  },
  {
    "name": "Sasak",
    "iso6392B": "sas",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Santali",
    "iso6392B": "sat",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sicilian",
    "iso6392B": "scn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Scots",
    "iso6392B": "sco",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Selkup",
    "iso6392B": "sel",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Semitic languages",
    "iso6392B": "sem",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Irish, Old (to 900)",
    "iso6392B": "sga",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sign Languages",
    "iso6392B": "sgn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Shan",
    "iso6392B": "shn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sidamo",
    "iso6392B": "sid",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sinhala; Sinhalese",
    "iso6392B": "sin",
    "iso6392T": null,
    "iso6391": "si"
  },
  {
    "name": "Siouan languages",
    "iso6392B": "sio",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sino-Tibetan languages",
    "iso6392B": "sit",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Slavic languages",
    "iso6392B": "sla",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Slovak",
    "iso6392B": "slo",
    "iso6392T": "slk",
    "iso6391": "sk"
  },
  {
    "name": "Slovenian",
    "iso6392B": "slv",
    "iso6392T": null,
    "iso6391": "sl"
  },
  {
    "name": "Southern Sami",
    "iso6392B": "sma",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Northern Sami",
    "iso6392B": "sme",
    "iso6392T": null,
    "iso6391": "se"
  },
  {
    "name": "Sami languages",
    "iso6392B": "smi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Lule Sami",
    "iso6392B": "smj",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Inari Sami",
    "iso6392B": "smn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Samoan",
    "iso6392B": "smo",
    "iso6392T": null,
    "iso6391": "sm"
  },
  {
    "name": "Skolt Sami",
    "iso6392B": "sms",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Shona",
    "iso6392B": "sna",
    "iso6392T": null,
    "iso6391": "sn"
  },
  {
    "name": "Sindhi",
    "iso6392B": "snd",
    "iso6392T": null,
    "iso6391": "sd"
  },
  {
    "name": "Soninke",
    "iso6392B": "snk",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sogdian",
    "iso6392B": "sog",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Somali",
    "iso6392B": "som",
    "iso6392T": null,
    "iso6391": "so"
  },
  {
    "name": "Songhai languages",
    "iso6392B": "son",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sotho, Southern",
    "iso6392B": "sot",
    "iso6392T": null,
    "iso6391": "st"
  },
  {
    "name": "Spanish; Castilian",
    "iso6392B": "spa",
    "iso6392T": null,
    "iso6391": "es"
  },
  {
    "name": "Sardinian",
    "iso6392B": "srd",
    "iso6392T": null,
    "iso6391": "sc"
  },
  {
    "name": "Sranan Tongo",
    "iso6392B": "srn",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Serbian",
    "iso6392B": "srp",
    "iso6392T": null,
    "iso6391": "sr"
  },
  {
    "name": "Serer",
    "iso6392B": "srr",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Nilo-Saharan languages",
    "iso6392B": "ssa",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Swati",
    "iso6392B": "ssw",
    "iso6392T": null,
    "iso6391": "ss"
  },
  {
    "name": "Sukuma",
    "iso6392B": "suk",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sundanese",
    "iso6392B": "sun",
    "iso6392T": null,
    "iso6391": "su"
  },
  {
    "name": "Susu",
    "iso6392B": "sus",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Sumerian",
    "iso6392B": "sux",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Swahili",
    "iso6392B": "swa",
    "iso6392T": null,
    "iso6391": "sw"
  },
  {
    "name": "Swedish",
    "iso6392B": "swe",
    "iso6392T": null,
    "iso6391": "sv"
  },
  {
    "name": "Classical Syriac",
    "iso6392B": "syc",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Syriac",
    "iso6392B": "syr",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tahitian",
    "iso6392B": "tah",
    "iso6392T": null,
    "iso6391": "ty"
  },
  {
    "name": "Tai languages",
    "iso6392B": "tai",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tamil",
    "iso6392B": "tam",
    "iso6392T": null,
    "iso6391": "ta"
  },
  {
    "name": "Tatar",
    "iso6392B": "tat",
    "iso6392T": null,
    "iso6391": "tt"
  },
  {
    "name": "Telugu",
    "iso6392B": "tel",
    "iso6392T": null,
    "iso6391": "te"
  },
  {
    "name": "Timne",
    "iso6392B": "tem",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tereno",
    "iso6392B": "ter",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tetum",
    "iso6392B": "tet",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tajik",
    "iso6392B": "tgk",
    "iso6392T": null,
    "iso6391": "tg"
  },
  {
    "name": "Tagalog",
    "iso6392B": "tgl",
    "iso6392T": null,
    "iso6391": "tl"
  },
  {
    "name": "Thai",
    "iso6392B": "tha",
    "iso6392T": null,
    "iso6391": "th"
  },
  {
    "name": "Tibetan",
    "iso6392B": "tib",
    "iso6392T": "bod",
    "iso6391": "bo"
  },
  {
    "name": "Tigre",
    "iso6392B": "tig",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tigrinya",
    "iso6392B": "tir",
    "iso6392T": null,
    "iso6391": "ti"
  },
  {
    "name": "Tiv",
    "iso6392B": "tiv",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tokelau",
    "iso6392B": "tkl",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Klingon; tlhIngan-Hol",
    "iso6392B": "tlh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tlingit",
    "iso6392B": "tli",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tamashek",
    "iso6392B": "tmh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tonga (Nyasa)",
    "iso6392B": "tog",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tonga (Tonga Islands)",
    "iso6392B": "ton",
    "iso6392T": null,
    "iso6391": "to"
  },
  {
    "name": "Tok Pisin",
    "iso6392B": "tpi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tsimshian",
    "iso6392B": "tsi",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tswana",
    "iso6392B": "tsn",
    "iso6392T": null,
    "iso6391": "tn"
  },
  {
    "name": "Tsonga",
    "iso6392B": "tso",
    "iso6392T": null,
    "iso6391": "ts"
  },
  {
    "name": "Turkmen",
    "iso6392B": "tuk",
    "iso6392T": null,
    "iso6391": "tk"
  },
  {
    "name": "Tumbuka",
    "iso6392B": "tum",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tupi languages",
    "iso6392B": "tup",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Turkish",
    "iso6392B": "tur",
    "iso6392T": null,
    "iso6391": "tr"
  },
  {
    "name": "Altaic languages",
    "iso6392B": "tut",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Tuvalu",
    "iso6392B": "tvl",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Twi",
    "iso6392B": "twi",
    "iso6392T": null,
    "iso6391": "tw"
  },
  {
    "name": "Tuvinian",
    "iso6392B": "tyv",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Udmurt",
    "iso6392B": "udm",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Ugaritic",
    "iso6392B": "uga",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Uighur; Uyghur",
    "iso6392B": "uig",
    "iso6392T": null,
    "iso6391": "ug"
  },
  {
    "name": "Ukrainian",
    "iso6392B": "ukr",
    "iso6392T": null,
    "iso6391": "uk"
  },
  {
    "name": "Umbundu",
    "iso6392B": "umb",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Undetermined",
    "iso6392B": "und",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Urdu",
    "iso6392B": "urd",
    "iso6392T": null,
    "iso6391": "ur"
  },
  {
    "name": "Uzbek",
    "iso6392B": "uzb",
    "iso6392T": null,
    "iso6391": "uz"
  },
  {
    "name": "Vai",
    "iso6392B": "vai",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Venda",
    "iso6392B": "ven",
    "iso6392T": null,
    "iso6391": "ve"
  },
  {
    "name": "Vietnamese",
    "iso6392B": "vie",
    "iso6392T": null,
    "iso6391": "vi"
  },
  {
    "name": "Volapük",
    "iso6392B": "vol",
    "iso6392T": null,
    "iso6391": "vo"
  },
  {
    "name": "Votic",
    "iso6392B": "vot",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Wakashan languages",
    "iso6392B": "wak",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Walamo",
    "iso6392B": "wal",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Waray",
    "iso6392B": "war",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Washo",
    "iso6392B": "was",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Welsh",
    "iso6392B": "wel",
    "iso6392T": "cym",
    "iso6391": "cy"
  },
  {
    "name": "Sorbian languages",
    "iso6392B": "wen",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Walloon",
    "iso6392B": "wln",
    "iso6392T": null,
    "iso6391": "wa"
  },
  {
    "name": "Wolof",
    "iso6392B": "wol",
    "iso6392T": null,
    "iso6391": "wo"
  },
  {
    "name": "Kalmyk; Oirat",
    "iso6392B": "xal",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Xhosa",
    "iso6392B": "xho",
    "iso6392T": null,
    "iso6391": "xh"
  },
  {
    "name": "Yao",
    "iso6392B": "yao",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Yapese",
    "iso6392B": "yap",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Yiddish",
    "iso6392B": "yid",
    "iso6392T": null,
    "iso6391": "yi"
  },
  {
    "name": "Yoruba",
    "iso6392B": "yor",
    "iso6392T": null,
    "iso6391": "yo"
  },
  {
    "name": "Yupik languages",
    "iso6392B": "ypk",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Zapotec",
    "iso6392B": "zap",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Blissymbols; Blissymbolics; Bliss",
    "iso6392B": "zbl",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Zenaga",
    "iso6392B": "zen",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Standard Moroccan Tamazight",
    "iso6392B": "zgh",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Zhuang; Chuang",
    "iso6392B": "zha",
    "iso6392T": null,
    "iso6391": "za"
  },
  {
    "name": "Zande languages",
    "iso6392B": "znd",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Zulu",
    "iso6392B": "zul",
    "iso6392T": null,
    "iso6391": "zu"
  },
  {
    "name": "Zuni",
    "iso6392B": "zun",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "No linguistic content; Not applicable",
    "iso6392B": "zxx",
    "iso6392T": null,
    "iso6391": null
  },
  {
    "name": "Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki",
    "iso6392B": "zza",
    "iso6392T": null,
    "iso6391": null
  }
]

@Injectable()
export class DataService {
  constructor(private http: Http){}

  private countriesUrl = 'http://country.io/names.json';  // URL to web api

  private projects: Project[] = PROJECTS.slice()

  getThemes(): Promise<ProjectTheme[]> {
    return Promise.resolve(THEMES);
  }

  getFormats(themeId: string): Promise<ProjectFormat[]> {
    return Promise.resolve(FORMATS);
  }

  getProjects(themeId: string, formatId: string): Promise<Project[]> {
    return Promise.resolve(this.projects.filter((project: Project) => project.themes.map(theme=>theme.id).includes(themeId) && project.formats.map(format=>format.id).includes(formatId)));
  }

  getProject(projectId: string): Promise<Project> {
    return Promise.resolve(this.projects.find((project: Project) => project.id == projectId));
  }

  addProject(project: Project): void {
    this.projects.push(project)
  }

  getCountries(): Promise<Country[]> {
    return Promise.resolve(Object.entries(COUNTRY_CODE_TO_NAME)
      .map(([key,value])=> new Country( key, String(value)))
      .sort((c1,c2) => c1.name < c2.name? -1 : c1.name > c2.name ? 1 : 0));
  }

  getLanguages(): Promise<Language[]> {
    return Promise.resolve(LANGUAGE_LIST
      .filter((lang) => lang.iso6391 != null)
      .sort((c1,c2) => c1.name < c2.name? -1 : c1.name > c2.name ? 1 : 0));
  }
}