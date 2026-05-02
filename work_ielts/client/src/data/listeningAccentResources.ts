import type { LocalizedText } from "@/lib/i18n";

export interface ListeningAccentResource {
  id: string;
  title: string;
  provider: string;
  accent: "British" | "American" | "Australian" | "New Zealand" | "Global English" | "Academic English";
  sourceType: "Official" | "YouTube" | "Playlist" | "Podcast";
  level: string;
  description: LocalizedText;
  howToUse: LocalizedText;
  url: string;
  isFree: true;
  languageSupport: LocalizedText;
}

export const listeningAccentResources: ListeningAccentResource[] = [
  {
    id: "ielts-official-accent-format",
    title: "IELTS Academic Listening Format and Accent Information",
    provider: "IELTS.org",
    accent: "Global English",
    sourceType: "Official",
    level: "IELTS Listening",
    description: {
      en: "Official IELTS information explaining the Listening format and the range of accents candidates may hear.",
      zh: "IELTS 官方说明，介绍听力考试形式以及考生可能听到的不同口音。",
      yue: "IELTS 官方說明，介紹聽力考試形式同考生可能聽到嘅唔同口音。",
    },
    howToUse: {
      en: "Read this first to understand why IELTS includes multiple English accents.",
      zh: "先阅读此页面，理解为什么 IELTS 会包含多种英语口音。",
      yue: "先閱讀呢個頁面，理解點解 IELTS 會包含多種英語口音。",
    },
    url: "https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening",
    isFree: true,
    languageSupport: {
      en: "Official English guidance",
      zh: "英文官方说明",
      yue: "英文官方說明",
    },
  },
  {
    id: "british-council-listening-accent",
    title: "British Council IELTS Listening Practice",
    provider: "British Council",
    accent: "British",
    sourceType: "Official",
    level: "IELTS Listening",
    description: {
      en: "Official free IELTS listening practice with clear test-style audio and answer checking.",
      zh: "官方免费雅思听力练习，提供清晰的考试形式音频和答案核对。",
      yue: "官方免費雅思聽力練習，提供清晰嘅考試形式音頻同答案核對。",
    },
    howToUse: {
      en: "Listen once for the situation, then replay to catch names, numbers, and key details.",
      zh: "第一遍听场景，第二遍重点抓人名、数字和关键信息。",
      yue: "第一遍聽場景，第二遍重點捉人名、數字同關鍵資料。",
    },
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening",
    isFree: true,
    languageSupport: {
      en: "English test audio and questions",
      zh: "英文考试音频和题目",
      yue: "英文考試音頻同題目",
    },
  },
  {
    id: "bbc-sounds-of-english",
    title: "BBC Learning English - Sounds of English",
    provider: "BBC Learning English",
    accent: "British",
    sourceType: "Playlist",
    level: "Pronunciation and listening",
    description: {
      en: "BBC pronunciation videos for noticing British English sounds and improving sound discrimination.",
      zh: "BBC 发音视频，适合识别英式英语音素并提升辨音能力。",
      yue: "BBC 發音影片，適合識別英式英語音素並提升辨音能力。",
    },
    howToUse: {
      en: "Shadow one short sentence and note the vowel or consonant sound that feels difficult.",
      zh: "跟读一个短句，并记录最难分辨的元音或辅音。",
      yue: "跟讀一個短句，並記低最難分辨嘅元音或者輔音。",
    },
    url: "https://www.youtube.com/playlist?list=PLD6B222E02447DC07",
    isFree: true,
    languageSupport: {
      en: "English videos with YouTube captions when available",
      zh: "英文视频，部分内容可使用 YouTube 字幕",
      yue: "英文影片，部分內容可使用 YouTube 字幕",
    },
  },
  {
    id: "bbc-six-minute-accent",
    title: "BBC Learning English - 6 Minute English",
    provider: "BBC Learning English",
    accent: "Academic English",
    sourceType: "Playlist",
    level: "Daily Listening",
    description: {
      en: "Short topic-based episodes for academic vocabulary, main idea listening, and discussion ideas.",
      zh: "短篇主题节目，适合积累学术词汇、训练主旨理解和准备讨论观点。",
      yue: "短篇主題節目，適合累積學術詞彙、訓練主旨理解同準備討論觀點。",
    },
    howToUse: {
      en: "Write down five keywords, then explain the topic in your own words.",
      zh: "写下五个关键词，然后用自己的话解释主题。",
      yue: "寫低五個關鍵詞，然後用自己嘅說話解釋主題。",
    },
    url: "https://www.youtube.com/playlist?list=PLcetZ6gSk96-FECmH9l7Vlx5VDigvgZpt",
    isFree: true,
    languageSupport: {
      en: "English learning audio and explanations",
      zh: "英文学习音频和讲解",
      yue: "英文學習音頻同講解",
    },
  },
  {
    id: "rachels-english-channel",
    title: "Rachel's English - American English Pronunciation",
    provider: "Rachel's English",
    accent: "American",
    sourceType: "YouTube",
    level: "Pronunciation and listening",
    description: {
      en: "Trusted American English pronunciation lessons for connected speech, stress, and natural listening.",
      zh: "可信的美式英语发音课程，适合练习连读、重音和自然听力。",
      yue: "可信嘅美式英語發音課程，適合練習連讀、重音同自然聽力。",
    },
    howToUse: {
      en: "Choose one short lesson, repeat the target sound, then listen for it in a news clip.",
      zh: "选择一节短课，重复目标发音，再在新闻片段中识别它。",
      yue: "選擇一節短課，重複目標發音，再喺新聞片段入面識別佢。",
    },
    url: "https://www.youtube.com/channel/UCvn_XCl_mgQmt3sD753zdJA",
    isFree: true,
    languageSupport: {
      en: "English pronunciation videos",
      zh: "英文发音视频",
      yue: "英文發音影片",
    },
  },
  {
    id: "rachels-pronunciation-playlist",
    title: "Rachel's English - American Pronunciation Playlist",
    provider: "Rachel's English",
    accent: "American",
    sourceType: "Playlist",
    level: "Pronunciation and listening",
    description: {
      en: "Focused American pronunciation playlist for sounds, rhythm, reductions, and natural speech.",
      zh: "美式发音专题播放列表，覆盖音素、节奏、弱读和自然语流。",
      yue: "美式發音專題播放列表，涵蓋音素、節奏、弱讀同自然語流。",
    },
    howToUse: {
      en: "Shadow one sentence and compare your rhythm with the speaker's rhythm.",
      zh: "跟读一个句子，并比较自己的节奏和说话者的节奏。",
      yue: "跟讀一個句子，並比較自己嘅節奏同講者嘅節奏。",
    },
    url: "https://www.youtube.com/playlist?list=PLebQp5j7re4lZQdBQmKHVftSI7VAX1xrG",
    isFree: true,
    languageSupport: {
      en: "English pronunciation videos",
      zh: "英文发音视频",
      yue: "英文發音影片",
    },
  },
  {
    id: "npr-up-first",
    title: "NPR Up First",
    provider: "NPR",
    accent: "American",
    sourceType: "Podcast",
    level: "News English",
    description: {
      en: "Short American news podcast episodes for fast but clear current-affairs listening.",
      zh: "美式新闻播客短节目，适合练习较快但清晰的时事听力。",
      yue: "美式新聞播客短節目，適合練習較快但清晰嘅時事聽力。",
    },
    howToUse: {
      en: "Listen for the three main stories, then summarize each in one sentence.",
      zh: "听出三个主要新闻，并各用一句话总结。",
      yue: "聽出三個主要新聞，並各用一句總結。",
    },
    url: "https://www.npr.org/podcasts/510318/up-first",
    isFree: true,
    languageSupport: {
      en: "English podcast audio",
      zh: "英文播客音频",
      yue: "英文播客音頻",
    },
  },
  {
    id: "pbs-newshour-youtube",
    title: "PBS NewsHour YouTube",
    provider: "PBS NewsHour",
    accent: "American",
    sourceType: "YouTube",
    level: "News English",
    description: {
      en: "Public news videos with clear interview, report, and academic-style discussion language.",
      zh: "公共新闻视频，包含清晰的采访、报道和学术讨论式表达。",
      yue: "公共新聞影片，包含清晰嘅訪問、報道同學術討論式表達。",
    },
    howToUse: {
      en: "Watch one report and note five keywords plus one useful transition phrase.",
      zh: "观看一段报道，记录五个关键词和一个有用衔接表达。",
      yue: "睇一段報道，記低五個關鍵詞同一個有用銜接表達。",
    },
    url: "https://www.youtube.com/user/PBSNewsHour",
    isFree: true,
    languageSupport: {
      en: "English videos with captions when available",
      zh: "英文视频，部分内容可使用字幕",
      yue: "英文影片，部分內容可使用字幕",
    },
  },
  {
    id: "american-english-podcast",
    title: "American English Podcast",
    provider: "American English Podcast",
    accent: "American",
    sourceType: "Podcast",
    level: "Daily Listening",
    description: {
      en: "American English listening episodes for everyday language, culture, pronunciation, and vocabulary.",
      zh: "美式英语听力节目，覆盖日常语言、文化、发音和词汇。",
      yue: "美式英語聽力節目，涵蓋日常語言、文化、發音同詞彙。",
    },
    howToUse: {
      en: "Listen for natural expressions, pause, and repeat one useful sentence aloud.",
      zh: "听自然表达，暂停后大声重复一个有用句子。",
      yue: "聽自然表達，暫停後大聲重複一個有用句子。",
    },
    url: "https://americanenglishpodcast.com/",
    isFree: true,
    languageSupport: {
      en: "English podcast and learning notes",
      zh: "英文播客和学习笔记",
      yue: "英文播客同學習筆記",
    },
  },
  {
    id: "idp-listening-accent",
    title: "IDP IELTS Listening Preparation",
    provider: "IDP IELTS",
    accent: "Australian",
    sourceType: "Official",
    level: "IELTS Listening",
    description: {
      en: "Official IDP listening preparation videos and IELTS guidance from a trusted Australian IELTS co-owner.",
      zh: "IDP 官方听力备考视频与雅思指导，来自可信的澳大利亚 IELTS 共同主办方。",
      yue: "IDP 官方聽力備考影片同雅思指引，來自可信嘅澳洲 IELTS 共同主辦方。",
    },
    howToUse: {
      en: "Use this as a safe Australian IELTS source before moving to broader listening practice.",
      zh: "先用这个可靠的澳大利亚 IELTS 来源，再扩展到更广泛听力练习。",
      yue: "先用呢個可靠嘅澳洲 IELTS 來源，再擴展到更廣泛聽力練習。",
    },
    url: "https://ielts.idp.com/prepare/all-test-types/listening/video",
    isFree: true,
    languageSupport: {
      en: "English IELTS guidance",
      zh: "英文雅思指导",
      yue: "英文雅思指引",
    },
  },
  {
    id: "global-english-accent-note",
    title: "IELTS Global Accent Practice Note",
    provider: "IELTS Navigator",
    accent: "New Zealand",
    sourceType: "Official",
    level: "Global English",
    description: {
      en: "IELTS may include a range of native-speaker accents. Use the official IELTS format page to guide safe New Zealand and global accent practice.",
      zh: "IELTS 可能包含多种母语者口音。可用官方考试形式页面作为新西兰及全球口音练习的安全参考。",
      yue: "IELTS 可能包含多種母語者口音。可以用官方考試形式頁面作為新西蘭同全球口音練習嘅安全參考。",
    },
    howToUse: {
      en: "Practise by comparing accent features across official IELTS and trusted public English resources.",
      zh: "通过比较官方 IELTS 与可信公开英语资源中的口音特征来练习。",
      yue: "透過比較官方 IELTS 同可信公開英語資源入面嘅口音特徵嚟練習。",
    },
    url: "https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-listening",
    isFree: true,
    languageSupport: {
      en: "Official English guidance",
      zh: "英文官方说明",
      yue: "英文官方說明",
    },
  },
];
