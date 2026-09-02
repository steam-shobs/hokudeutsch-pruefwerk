/* Prüfwerk — dependency-free static learning application */
const UNIT_COLORS = ["#c7ef67", "#efb74e", "#5c9c85", "#ce6c47", "#6c8fb3", "#b58fc2"];

const units = [
  {
    id: "perfect", number: "7", title: "過去・現在完了", subtitle: "3基本形と現在完了", accent: UNIT_COLORS[0],
    summary: "過去の出来事を、助動詞・過去分詞・語順まで崩さず答案にする。",
    goals: ["3基本形", "haben / sein", "分離動詞", "過去人称変化"],
    theory: [
      { title: "動詞の3基本形", text: "不定形・過去基本形・過去分詞をひとまとまりで覚えます。規則動詞は -te / ge-…-t、不規則動詞は母音や語幹が変化します。-ieren動詞と非分離動詞には ge- を付けません。", formula: "lernen → lernte → gelernt　|　gehen → ging → gegangen", examples: [["studieren → studierte → studiert", "-ieren には ge- を付けない"], ["besuchen → besuchte → besucht", "be- は非分離の接頭辞"], ["aufstehen → stand … auf → aufgestanden", "分離部分の後に ge-"]] },
      { title: "現在完了の枠構造", text: "完了助動詞の現在人称変化を第2位、過去分詞を文末に置きます。日常会話の過去には現在完了、物語・客観的報告には過去形がよく使われます。", formula: "主語 + haben / sein（定形）+ 中域 + 過去分詞。", examples: [["Ich habe gestern ein Buch gekauft.", "私は昨日、本を一冊買いました。"], ["Ich bin schon einmal in Deutschland gewesen.", "私はドイツに行ったことがあります。"]] },
      { title: "sein支配を見抜く", text: "4格目的語を取らない自動詞のうち、場所の移動・状態変化を表すもの、sein・bleibenなどは sein と完了形を作ります。", formula: "移動: gehen / kommen / fahren　変化: werden / sterben / einschlafen", examples: [["Wir sind früh aufgestanden.", "状態変化なので sein。"], ["Er hat in Berlin gewohnt.", "wohnen は移動ではないので haben。"]] }
    ],
    questions: [
      {id:"p01",mode:"transform",tag:"過去分詞",prompt:"現在形を現在完了形に書き換えてください。",source:"Wir warten lange auf den Bus. Aber er kommt nicht.",answers:["Wir haben lange auf den Bus gewartet. Aber er ist nicht gekommen."],hint:"warten は haben、kommen は sein。",explanation:"助動詞を第2位、過去分詞を文末に置きます。"},
      {id:"p02",mode:"transform",tag:"助動詞",prompt:"現在形を現在完了形に書き換えてください。",source:"Er studiert Medizin und wird Arzt.",answers:["Er hat Medizin studiert und ist Arzt geworden."],hint:"werden は状態変化です。",explanation:"studieren は ge- なし、werden の完了は ist geworden。"},
      {id:"p03",mode:"transform",tag:"枠構造",prompt:"現在形を現在完了形に書き換えてください。",source:"Ich bekomme zwei Wochen Urlaub und reise nach Deutschland.",answers:["Ich habe zwei Wochen Urlaub bekommen und bin nach Deutschland gereist."],hint:"bekommen は非分離動詞。reisen は場所の移動。",explanation:"bekommen に ge- は付きません。"},
      {id:"p04",mode:"transform",tag:"分離動詞",prompt:"過去形を現在完了形に書き換えてください。",source:"Wir standen gestern früh auf und besichtigten die Stadt.",answers:["Wir sind gestern früh aufgestanden und haben die Stadt besichtigt."],hint:"aufstehen は分離動詞、besichtigen は -ieren。",explanation:"aufgestanden / besichtigt の形に注意。"},
      {id:"p05",mode:"fill",tag:"過去形",prompt:"物語に合う過去形を1語で入力してください。",source:"Vor einem großen Walde ___ ein armer Holzhacker mit seiner Frau. (wohnen)",answers:["wohnte"],hint:"規則動詞の3人称単数過去。",explanation:"wohnen → wohnte。"},
      {id:"p06",mode:"translate",tag:"語順",prompt:"ドイツ語に訳してください。",source:"いつ君たちはベルリンに行ったの？ — 9月の始め。",answers:["Wann seid ihr nach Berlin gefahren? Anfang September.","Wann seid ihr nach Berlin gefahren? - Anfang September."],hint:"fahren の現在完了、主語は ihr。",explanation:"seid … gefahren の枠を作ります。"},
      {id:"p07",mode:"translate",tag:"sein支配",prompt:"ドイツ語に訳してください。",source:"どのくらい京都に滞在したのですか？ — 2週間です。",answers:["Wie lange sind Sie in Kyoto geblieben? Zwei Wochen.","Wie lange bist du in Kyoto geblieben? Zwei Wochen."],hint:"bleiben は sein 支配。",explanation:"丁寧形とdu形のどちらも正答扱いです。"},
      {id:"p08",mode:"choice",tag:"助動詞",prompt:"正しい完了助動詞を選んでください。",source:"Michael ___ gestern schnell nach Hause gegangen.",options:["hat","ist","wird","war"],answers:["ist"],hint:"gehen は場所の移動。",explanation:"gehen は sein と完了形を作ります。"}
    ]
  },
  {
    id: "zu", number: "8", title: "zu不定詞・es", subtitle: "zu不定詞とesの用法", accent: UNIT_COLORS[1],
    summary: "zuの位置、um / ohne / statt、haben・sein + zu、非人称esを整理する。",
    goals: ["zuの位置", "um … zu", "haben / sein + zu", "非人称es"],
    theory: [
      { title: "zu不定詞句", text: "不定詞の直前にzuを置きます。分離動詞では前つづりと語幹の間に入ります。主語・目的語・付加語として使えます。", formula: "fahren → zu fahren　|　abfahren → abzufahren", examples: [["Es ist mir unmöglich, morgen abzufahren.", "明日出発するのは私には不可能だ。"], ["Ich habe keine Lust, heute zu arbeiten.", "今日は働く気がない。"]] },
      { title: "目的・付帯状況", text: "zu不定詞句に直接つながる前置詞は statt・ohne・um の3つです。主文と不定詞句の主語が同じとき、damit節をum … zuに圧縮できます。", formula: "um … zu（〜するため） / ohne … zu（〜せず） / statt … zu（〜する代わりに）", examples: [["Er fährt nach Berlin, um Deutsch zu lernen.", "彼はドイツ語を学ぶためベルリンへ行く。"], ["Sie ging, ohne etwas zu sagen.", "彼女は何も言わずに行った。"]] },
      { title: "esの3つの仕事", text: "esは特定の語句・前文を受ける代名詞、後続内容の先取り、自然・生理現象や熟語の形式主語として働きます。", formula: "Es regnet.　|　Es gibt + 4格.　|　Wie geht es Ihnen?", examples: [["Es freut mich, dass du bestanden hast.", "後続のdass節を先取り。"], ["Gibt es hier einen Parkplatz?", "ここに駐車場はありますか。"]] }
    ],
    questions: [
      {id:"z01",mode:"order",tag:"zuの位置",prompt:"語句を使って文を完成させてください。",source:"Es ist schwer, (noch heute / dieses Problem / lösen).",answers:["Es ist schwer, dieses Problem noch heute zu lösen.","Es ist schwer, noch heute dieses Problem zu lösen."],hint:"zu は lösen の直前。",explanation:"目的語と時の副詞の順には別解があります。"},
      {id:"z02",mode:"order",tag:"分離動詞",prompt:"語句を使って文を完成させてください。",source:"Er geht zum Bahnhof, (um / seine Freundin / abholen).",answers:["Er geht zum Bahnhof, um seine Freundin abzuholen."],hint:"abholen の ab と holen の間に zu。",explanation:"分離動詞は ab-zuholen。"},
      {id:"z03",mode:"transform",tag:"節圧縮",prompt:"zu不定詞を使って書き換えてください。",source:"Mein Freund fliegt nach Deutschland, damit er Germanistik studiert.",answers:["Mein Freund fliegt nach Deutschland, um Germanistik zu studieren."],hint:"主文と従属節の主語が同じです。",explanation:"damit節を um … zu に圧縮できます。"},
      {id:"z04",mode:"transform",tag:"haben + zu",prompt:"同じ意味の文に書き換えてください。",source:"Ich muss noch einen Brief schreiben.",answers:["Ich habe noch einen Brief zu schreiben."],hint:"義務を表す haben + zu。",explanation:"haben + zu不定詞は「〜しなければならない」。"},
      {id:"z05",mode:"fill",tag:"非人称es",prompt:"空所に1語を入れてください。",source:"In Japan ___ es keine Wölfe mehr.",answers:["gibt"],hint:"「〜がある」は es gibt + 4格。",explanation:"es gibt は決まった非人称表現です。"},
      {id:"z06",mode:"fill",tag:"天候",prompt:"空所に適切な過去分詞を入れてください。",source:"Gestern hat es den ganzen Tag ___, und nachts hat es angefangen zu schneien. (regnen)",answers:["geregnet"],hint:"天候動詞 regnen の過去分詞。",explanation:"regnen → geregnet。"},
      {id:"z07",mode:"translate",tag:"zuの位置",prompt:"ドイツ語に訳してください。",source:"私と一緒に富良野でスキーをする気はありますか？",answers:["Haben Sie Lust, mit mir in Furano Ski zu fahren?","Hast du Lust, mit mir in Furano Ski zu fahren?"],hint:"Lust haben, … zu。",explanation:"Ski fahren は分離させず zu fahren。"},
      {id:"z08",mode:"choice",tag:"es用法",prompt:"「〜がある」の文として正しいものを選んでください。",source:"近くに銀行はありますか？",options:["Ist es hier eine Bank?","Gibt es hier in der Nähe eine Bank?","Hat es hier eine Bank?","Es wird hier eine Bank."],answers:["Gibt es hier in der Nähe eine Bank?"],hint:"es gibt + 4格。",explanation:"eine Bank は4格ですが女性単数なので形は同じです。"}
    ]
  },
  {
    id: "reflexive", number: "9", title: "再帰表現・比較", subtitle: "再帰代名詞と比較変化", accent: UNIT_COLORS[2],
    summary: "再帰代名詞の3格・4格と、比較級・最上級の形を根拠から決める。",
    goals: ["3格 / 4格", "再帰動詞", "比較級", "最上級"],
    theory: [
      { title: "再帰代名詞の格", text: "主語と同じ人・物を指す3格・4格の代名詞です。体の一部など別の4格目的語があれば再帰代名詞は3格、なければ多くは4格です。", formula: "Ich wasche mich.　/　Ich wasche mir die Hände.", examples: [["Wasch dir das Gesicht!", "das Gesicht が4格なので dir は3格。"], ["Er erinnert sich an Berlin.", "sich erinnern an + 4格。"]] },
      { title: "前置詞まで一組で覚える", text: "再帰動詞は前置詞と結びつくものが多いため、代名詞だけでなく支配する前置詞までセットで再現します。", formula: "sich freuen auf / sich interessieren für / sich erinnern an", examples: [["Wir freuen uns auf die Ferien.", "休暇を楽しみにする。"], ["Wofür interessierst du dich?", "何に興味がありますか。"]] },
      { title: "比較の3段階", text: "比較級は-er、最上級は-(e)stが基本。叙述的な最上級は am …sten、名詞を修飾するときは定冠詞と語尾を使います。", formula: "so … wie / 比較級 + als / am + 最上級", examples: [["Er ist größer als ich.", "彼は私より背が高い。"], ["Der Park ist im Frühling am schönsten.", "この公園は春が最も美しい。"]] }
    ],
    questions: [
      {id:"r01",mode:"fill",tag:"比較変化",prompt:"空所2つを「,」で区切って入力してください。",source:"Hans ist so ___ wie ich, aber er ist viel ___ als ich. (alt, groß)",answers:["alt, größer","alt größer"],hint:"同等比較は原級、alsの前は比較級。",explanation:"so alt wie / größer als。"},
      {id:"r02",mode:"fill",tag:"最上級",prompt:"空所に1語を入れてください。",source:"In der Klasse ist Peter der ___ Schüler. (fleißig)",answers:["fleißigste"],hint:"定冠詞derの後で名詞Schülerを修飾。",explanation:"fleißigst + e。"},
      {id:"r03",mode:"fill",tag:"比較変化",prompt:"空所に1語を入れてください。",source:"Welche Stadt hat ___ Einwohner, Berlin oder Tokyo? (viel)",answers:["mehr"],hint:"vielの不規則比較級。",explanation:"viel → mehr → meist。"},
      {id:"r04",mode:"fill",tag:"再帰格",prompt:"空所に1語を入れてください。",source:"Wasche ___ das Gesicht! (du)",answers:["dir"],hint:"das Gesicht が4格目的語。",explanation:"別の4格目的語があるため再帰代名詞は3格 dir。"},
      {id:"r05",mode:"fill",tag:"再帰動詞",prompt:"空所に1語を入れてください。",source:"Wir freuen ___ schon auf die Sommerferien.",answers:["uns"],hint:"主語 wir の再帰代名詞。",explanation:"wir → uns。"},
      {id:"r06",mode:"translate",tag:"比較変化",prompt:"ドイツ語に訳してください。",source:"ドイツ語は英語より難しい。でも最も難しいのは日本語だ。",answers:["Deutsch ist schwieriger als Englisch. Aber Japanisch ist am schwierigsten."],hint:"schwierig → schwieriger → am schwierigsten。",explanation:"比較級 + als、最上級 am …sten。"},
      {id:"r07",mode:"translate",tag:"再帰動詞",prompt:"ドイツ語に訳してください。",source:"私のことを覚えていますか。もう一度お会いできるのを楽しみにしています。",answers:["Erinnern Sie sich an mich? Ich freue mich darauf, Sie wiederzusehen.","Erinnerst du dich an mich? Ich freue mich darauf, dich wiederzusehen."],hint:"sich erinnern an / sich freuen auf。",explanation:"丁寧形とdu形を正答扱いにしています。"},
      {id:"r08",mode:"choice",tag:"比較変化",prompt:"正しい最上級を選んでください。",source:"gern — lieber — ___",options:["gernst","am gernsten","am liebsten","am besten"],answers:["am liebsten"],hint:"不規則変化。",explanation:"gern → lieber → am liebsten。"}
    ]
  },
  {
    id: "passive", number: "10", title: "受動", subtitle: "受動文の作り方", accent: UNIT_COLORS[3],
    summary: "能動から受動へ、4格目的語・動作主・助動詞・過去分詞を順に組み替える。",
    goals: ["werden + Partizip II", "von / durch", "非人称受動", "状態受動"],
    theory: [
      { title: "能動から受動への変換", text: "能動文の4格目的語だけが受動文の主語になります。動作主はvon + 3格、原因・手段はdurch + 4格で表せます。", formula: "4格目的語 → 1格主語 + werden + 過去分詞", examples: [["Der Vater schenkt den Anzug.", "父がスーツを贈る。"], ["Der Anzug wird vom Vater geschenkt.", "スーツは父から贈られる。"]] },
      { title: "4格目的語がない受動", text: "自動詞や3格支配動詞でも受動にできます。文頭では形式主語esを置き、それ以外の要素が文頭ならesを省きます。", formula: "Es wird hier getanzt.　/　Hier wird getanzt.", examples: [["Ihm wird oft geholfen.", "彼はよく助けてもらう。"], ["Darüber wird nicht gesprochen.", "それについては話されない。"]] },
      { title: "動作受動と状態受動", text: "werden + 過去分詞は動作の進行、sein + 過去分詞は動作後の状態を表します。", formula: "Die Tür wird geöffnet. ≠ Die Tür ist geöffnet.", examples: [["Das Fenster wird jetzt geöffnet.", "窓はいま開けられる。"], ["Das Fenster ist geöffnet.", "窓は開いている。"]] }
    ],
    questions: [
      {id:"v01",mode:"transform",tag:"受動変換",prompt:"能動文を受動文にしてください。",source:"Meine Tante schenkt mir den Kugelschreiber.",answers:["Der Kugelschreiber wird mir von meiner Tante geschenkt."],hint:"4格目的語 den Kugelschreiber が主語。",explanation:"mir は3格のまま残ります。"},
      {id:"v02",mode:"transform",tag:"分離動詞",prompt:"能動文を受動文にしてください。",source:"Der Professor lädt den Studenten zum Tee ein.",answers:["Der Student wird vom Professor zum Tee eingeladen."],hint:"einladen の過去分詞は eingeladen。",explanation:"den Studenten → der Student。"},
      {id:"v03",mode:"transform",tag:"受動変換",prompt:"能動文を受動文にしてください。",source:"Man baut jetzt die U-Bahn.",answers:["Die U-Bahn wird jetzt gebaut."],hint:"man は受動文で省略。",explanation:"die U-Bahn が主語になり、wird gebaut。"},
      {id:"v04",mode:"transform",tag:"受動変換",prompt:"受動文を能動文にしてください。",source:"Der Plan wurde von meinem Bruder vorgeschlagen.",answers:["Mein Bruder schlug den Plan vor.","Mein Bruder hat den Plan vorgeschlagen."],hint:"過去形でも現在完了でも可。",explanation:"動作主を主語、der Plan を4格に戻します。"},
      {id:"v05",mode:"choice",tag:"状態受動",prompt:"「ドアは一昨日から閉まっている」に合う文を選んでください。",source:"状態を表す受動",options:["Die Tür wird seit vorgestern geschlossen.","Die Tür ist seit vorgestern geschlossen.","Die Tür wurde seit vorgestern schließen.","Die Tür hat seit vorgestern geschlossen."],answers:["Die Tür ist seit vorgestern geschlossen."],hint:"結果の状態は sein + 過去分詞。",explanation:"seit と状態が続くため状態受動です。"},
      {id:"v06",mode:"translate",tag:"非人称受動",prompt:"ドイツ語に訳してください。",source:"この図書館では本が読まれる。",answers:["In dieser Bibliothek werden Bücher gelesen.","In der Bibliothek werden Bücher gelesen."],hint:"Bücher が複数主語。",explanation:"複数なので werden。"},
      {id:"v07",mode:"translate",tag:"受動変換",prompt:"ドイツ語に訳してください。",source:"日本でもベートーヴェンの音楽はたくさん演奏され、熱心に聴かれる。",answers:["Auch in Japan wird Beethovens Musik viel gespielt und begeistert gehört.","Auch in Japan wird die Musik von Beethoven viel gespielt und begeistert gehört."],hint:"一つの主語に wird、2つの過去分詞。",explanation:"gespielt / gehört を並列します。"},
      {id:"v08",mode:"fill",tag:"助動詞",prompt:"空所に1語を入れてください。",source:"Hier ___ auch am Sonntag gearbeitet.",answers:["wird"],hint:"非人称の現在受動。",explanation:"形式上は3人称単数 wird。"}
    ]
  },
  {
    id: "relative", number: "11", title: "関係詞", subtitle: "関係代名詞の性・数・格", accent: UNIT_COLORS[4],
    summary: "先行詞の性・数と、関係文内の役割を分けて考え、正しい形を選ぶ。",
    goals: ["定関係代名詞", "dessen / deren", "前置詞 + 関係詞", "wer / was"],
    theory: [
      { title: "二段階で形を決める", text: "性・数は主文の先行詞に一致し、格は関係文の中での役割によって決まります。関係文では定動詞を文末に置きます。", formula: "先行詞の性・数 → 関係文内の格 → der / den / dem / dessen", examples: [["der Bus, der zur Uni fährt", "Busは男性・関係文の主語→1格 der。"], ["der Bus, mit dem wir fahren", "mitは3格→dem。"]] },
      { title: "所有と前置詞", text: "2格dessen / derenは「その〜」を表し、後ろの名詞に冠詞を付けません。前置詞があれば、その支配格から形を決めます。", formula: "der Mann, dessen Frau …　|　die Frau, mit deren Sohn …", examples: [["Mein Onkel, dessen Frau krank ist, …", "叔父の妻→男性先行詞のdessen。"], ["das Auto, in das ich steige", "in + 4格（方向）→das。"]] },
      { title: "wer / was", text: "特定の先行詞を持たず、「〜する人」「〜するもの・こと」を表します。wasはalles・etwas・nichtsや最上級の名詞化、文全体も受けます。", formula: "Wer zuletzt lacht, lacht am besten.　|　Alles, was ich weiß", examples: [["Wer Deutsch lernen will, muss üben.", "ドイツ語を学びたい人は練習が必要だ。"], ["Das ist das Schönste, was ich erlebt habe.", "これは私が経験した最も美しいことだ。"]] }
    ],
    questions: [
      {id:"l01",mode:"fill",tag:"関係格",prompt:"空所に関係代名詞を入れてください。",source:"Der Hut, ___ du gestern gekauft hast, steht dir gut.",answers:["den"],hint:"先行詞は男性単数。関係文ではkaufenの4格目的語。",explanation:"男性4格なので den。"},
      {id:"l02",mode:"fill",tag:"関係格",prompt:"空所に関係代名詞を入れてください。",source:"Ich möchte ein Auto, ___ nicht so viel Benzin verbraucht.",answers:["das"],hint:"先行詞は中性。関係文の主語。",explanation:"中性1格なので das。"},
      {id:"l03",mode:"fill",tag:"前置詞",prompt:"空所に関係代名詞を入れてください。",source:"Das ist ein Freund, mit ___ ich oft Tennis spiele.",answers:["dem"],hint:"mit は3格支配、先行詞は男性。",explanation:"男性3格 dem。"},
      {id:"l04",mode:"fill",tag:"2格",prompt:"空所に関係代名詞を入れてください。",source:"Mein Onkel, ___ Frau im Krankenhaus liegt, macht alles allein.",answers:["dessen"],hint:"「叔父の妻」—先行詞は男性。",explanation:"男性・中性の2格関係代名詞は dessen。"},
      {id:"l05",mode:"fill",tag:"不定関係詞",prompt:"空所に1語を入れてください。",source:"___ nach Deutschland fahren möchte, muss Deutsch lernen.",answers:["Wer"],hint:"特定の先行詞がなく「〜する人」。",explanation:"人を表す不定関係代名詞 Wer。"},
      {id:"l06",mode:"transform",tag:"文結合",prompt:"2文を関係文で一つにしてください。",source:"Wie findest du die Tasche? Ich habe sie in Spanien gekauft.",answers:["Wie findest du die Tasche, die ich in Spanien gekauft habe?"],hint:"Tascheは女性・関係文の4格。",explanation:"女性の1格と4格はどちらも die。動詞は文末です。"},
      {id:"l07",mode:"translate",tag:"2格",prompt:"ドイツ語に訳してください。",source:"僕の彼女が飼っていた犬が、僕たちを助けてくれた。",answers:["Der Hund, den meine Freundin hatte, hat uns geholfen.","Der Hund, den meine Freundin gehalten hatte, hat uns geholfen."],hint:"Hundは男性、関係文では4格。",explanation:"den を使い、主文は hat uns geholfen。"},
      {id:"l08",mode:"choice",tag:"関係格",prompt:"正しい形を選んでください。",source:"Die Frau, mit ___ Sohn unsere Tochter befreundet ist, …",options:["dessen","deren","derer","denen"],answers:["deren"],hint:"先行詞は女性、所有を表す2格。",explanation:"女性単数の2格関係代名詞は deren。"}
    ]
  },
  {
    id: "subjunctive", number: "12", title: "接続法", subtitle: "間接話法と非現実話法", accent: UNIT_COLORS[5],
    summary: "第1式と第2式を使い分け、間接話法・非現実・丁寧表現を答案にする。",
    goals: ["接続法第1式", "接続法第2式", "間接話法", "非現実話法"],
    theory: [
      { title: "接続法第1式", text: "不定詞語幹に -e, -(e)st, -e, -en, -(e)t, -en を付けます。間接話法と要求・願望に使います。直説法と同形になる場合は第2式で区別します。", formula: "lernen → er lerne　|　sein → er sei　|　haben → er habe", examples: [["Er sagt, er sei müde.", "彼は疲れていると言う。"], ["Man nehme täglich eine Tablette.", "1日1錠服用すること。"]] },
      { title: "間接話法の変換", text: "引用符を外し、人称・所有・時や場所の表現を話者の視点に合わせます。疑問文はobまたは疑問詞、命令はsollen / mögen + 不定詞で表します。", formula: "„Ich bin müde.“ → Er sagt, er sei müde.", examples: [["Sie fragte, ob er mitkomme.", "彼女は彼が一緒に来るか尋ねた。"], ["Er sagte, ich solle kommen.", "彼は私に来るよう言った。"]] },
      { title: "接続法第2式と非現実", text: "直説法過去を基礎に、変音できる不規則動詞はウムラウトを付けます。現在の非現実は第2式、過去の非現実はhätte / wäre + 過去分詞です。", formula: "Wenn ich Zeit hätte, führe / würde ich in die Stadt fahren.", examples: [["Wenn ich Zeit gehabt hätte, wäre ich gefahren.", "時間があったなら行ったのに。"], ["Wenn er doch hier wäre!", "彼がここにいればなあ。"]] }
    ],
    questions: [
      {id:"k01",mode:"transform",tag:"間接話法",prompt:"直接話法を間接話法にしてください。",source:"Ich fragte ihn: „Kommst du auch mit?“",answers:["Ich fragte ihn, ob er auch mitkomme.","Ich fragte ihn, ob er auch mitkäme."],hint:"決定疑問文は ob。人称を du→er に。",explanation:"原則は第1式 mitkomme、第2式 mitkäme も可。"},
      {id:"k02",mode:"transform",tag:"間接話法",prompt:"直接話法を間接話法にしてください。",source:"Sie fragte mich: „Wann fährt der nächste Zug nach Otaru?“",answers:["Sie fragte mich, wann der nächste Zug nach Otaru fahre."],hint:"疑問詞wannを残し、定動詞を文末へ。",explanation:"fahren の第1式3人称単数は fahre。"},
      {id:"k03",mode:"transform",tag:"命令の間接話法",prompt:"直接話法を間接話法にしてください。",source:"Er sagt mir: „Rufen Sie mich morgen noch einmal an!“",answers:["Er sagt mir, ich solle ihn morgen noch einmal anrufen."],hint:"命令は sollen + 不定詞。人称も変更。",explanation:"Sie→ich、mich→ihn、anrufenを文末へ。"},
      {id:"k04",mode:"transform",tag:"間接話法",prompt:"直接話法を間接話法にしてください。",source:"Er hat mir gesagt: „Ich bin schon Meister geworden.“",answers:["Er hat mir gesagt, er sei schon Meister geworden."],hint:"sein の第1式は sei。",explanation:"過去の内容は sei + 過去分詞で表します。"},
      {id:"k05",mode:"fill",tag:"接続法第2式",prompt:"空所に1語を入れてください。",source:"Wenn er doch hier ___! (sein)",answers:["wäre"],hint:"sein の接続法第2式。",explanation:"war → wäre。"},
      {id:"k06",mode:"translate",tag:"非現実話法",prompt:"ドイツ語に訳してください。",source:"もし僕が芸術家だったら、君に愛の歌を捧げるのに。",answers:["Wenn ich Künstler wäre, würde ich dir ein Liebeslied widmen.","Wäre ich Künstler, würde ich dir ein Liebeslied widmen."],hint:"現在の非現実。wenn節はwäre、主文はwürde + 不定詞。",explanation:"wenn省略でWäreから始める形も正答です。"},
      {id:"k07",mode:"choice",tag:"接続法第2式",prompt:"より丁寧な表現を選んでください。",source:"Teilen Sie mir mit, ob es möglich ist.",options:["Sie teilen mir das mit.","Würden Sie mir bitte mitteilen, ob es möglich ist?","Teilen Sie es sofort mit!","Sie hätten es mitgeteilt."],answers:["Würden Sie mir bitte mitteilen, ob es möglich ist?"],hint:"würden + 不定詞で依頼を和らげます。",explanation:"接続法第2式は丁寧な依頼にも使われます。"},
      {id:"k08",mode:"fill",tag:"接続法第2式",prompt:"空所に1語を入れてください。",source:"Was ___ Sie getan, wenn Ihnen das passiert wäre? (haben)",answers:["hätten"],hint:"Sieに対するhabenの第2式。",explanation:"haben → hätten。"}
    ]
  }
];

const verbs = [
  ["beginnen","—","begann","begänne / begönne","begonnen","始める・始まる","haben"],
  ["bieten","—","bot","böte","geboten","提供する","haben"],
  ["binden","—","band","bände","gebunden","結ぶ","haben"],
  ["bitten","—","bat","bäte","gebeten","頼む","haben"],
  ["bleiben","—","blieb","bliebe","geblieben","とどまる","sein"],
  ["brechen","du brichst","brach","bräche","gebrochen","破る","haben"],
  ["bringen","—","brachte","brächte","gebracht","もたらす","haben"],
  ["denken","—","dachte","dächte","gedacht","考える","haben"],
  ["dürfen","ich darf","durfte","dürfte","gedurft","〜してよい","haben"],
  ["essen","du isst","aß","äße","gegessen","食べる","haben"],
  ["fahren","du fährst","fuhr","führe","gefahren","乗り物で行く","sein / haben"],
  ["fallen","du fällst","fiel","fiele","gefallen","落ちる","sein"],
  ["fangen","du fängst","fing","finge","gefangen","捕まえる","haben"],
  ["finden","—","fand","fände","gefunden","見つける","haben"],
  ["fliegen","—","flog","flöge","geflogen","飛ぶ","sein / haben"],
  ["geben","du gibst","gab","gäbe","gegeben","与える","haben"],
  ["gehen","—","ging","ginge","gegangen","行く","sein"],
  ["gelingen","es gelingt","gelang","gelänge","gelungen","うまくいく","sein"],
  ["genießen","—","genoss","genösse","genossen","味わう","haben"],
  ["geschehen","es geschieht","geschah","geschähe","geschehen","起こる","sein"],
  ["gewinnen","—","gewann","gewänne / gewönne","gewonnen","勝つ・得る","haben"],
  ["graben","du gräbst","grub","grübe","gegraben","掘る","haben"],
  ["greifen","—","griff","griffe","gegriffen","つかむ","haben"],
  ["haben","du hast","hatte","hätte","gehabt","持つ","haben"],
  ["halten","du hältst","hielt","hielte","gehalten","保つ・止まる","haben"],
  ["hängen","—","hing","hinge","gehangen","掛かっている","haben"],
  ["heben","—","hob","höbe","gehoben","上げる","haben"],
  ["heißen","—","hieß","hieße","geheißen","〜という名である","haben"],
  ["helfen","du hilfst","half","hülfe / hälfe","geholfen","助ける","haben"],
  ["kennen","—","kannte","kennte","gekannt","知っている","haben"],
  ["kommen","—","kam","käme","gekommen","来る","sein"],
  ["können","ich kann","konnte","könnte","gekonnt","〜できる","haben"],
  ["laden","du lädst","lud","lüde","geladen","積む・招待する","haben"],
  ["lassen","du lässt","ließ","ließe","gelassen","〜させる","haben"],
  ["laufen","du läufst","lief","liefe","gelaufen","走る","sein"],
  ["lesen","du liest","las","läse","gelesen","読む","haben"],
  ["liegen","—","lag","läge","gelegen","横たわる","haben"],
  ["mögen","ich mag","mochte","möchte","gemocht","好む・かもしれない","haben"],
  ["müssen","ich muss","musste","müsste","gemusst","〜ねばならない","haben"],
  ["nehmen","du nimmst","nahm","nähme","genommen","取る","haben"],
  ["nennen","—","nannte","nennte","genannt","名を言う","haben"],
  ["raten","du rätst","riet","riete","geraten","助言する","haben"],
  ["reiten","—","ritt","ritte","geritten","馬に乗る","sein / haben"],
  ["rufen","—","rief","riefe","gerufen","呼ぶ","haben"],
  ["scheinen","—","schien","schiene","geschienen","見える・輝く","haben"],
  ["schlafen","du schläfst","schlief","schliefe","geschlafen","眠る","haben"],
  ["schlagen","du schlägst","schlug","schlüge","geschlagen","打つ","haben"],
  ["schließen","—","schloss","schlösse","geschlossen","閉じる","haben"],
  ["schneiden","—","schnitt","schnitte","geschnitten","切る","haben"],
  ["schreiben","—","schrieb","schriebe","geschrieben","書く","haben"],
  ["schreien","—","schrie","schriee","geschrien","叫ぶ","haben"],
  ["schweigen","—","schwieg","schwiege","geschwiegen","黙る","haben"],
  ["schwimmen","—","schwamm","schwömme / schwämme","geschwommen","泳ぐ","sein / haben"],
  ["sehen","du siehst","sah","sähe","gesehen","見る","haben"],
  ["sein","ich bin","war","wäre","gewesen","〜である","sein"],
  ["singen","—","sang","sänge","gesungen","歌う","haben"],
  ["sinken","—","sank","sänke","gesunken","沈む","sein"],
  ["sitzen","—","saß","säße","gesessen","座っている","haben"],
  ["sollen","ich soll","sollte","sollte","gesollt","〜すべきだ","haben"],
  ["sprechen","du sprichst","sprach","spräche","gesprochen","話す","haben"],
  ["stehen","—","stand","stünde / stände","gestanden","立っている","haben"],
  ["steigen","—","stieg","stiege","gestiegen","登る","sein"],
  ["sterben","du stirbst","starb","stürbe","gestorben","死ぬ","sein"],
  ["tragen","du trägst","trug","trüge","getragen","運ぶ","haben"],
  ["treffen","du triffst","traf","träfe","getroffen","出会う","haben"],
  ["treiben","—","trieb","triebe","getrieben","追う・行う","haben"],
  ["treten","du trittst","trat","träte","getreten","歩む・踏む","sein / haben"],
  ["trinken","—","trank","tränke","getrunken","飲む","haben"],
  ["tun","—","tat","täte","getan","する","haben"],
  ["vergessen","du vergisst","vergaß","vergäße","vergessen","忘れる","haben"],
  ["verlieren","—","verlor","verlöre","verloren","失う","haben"],
  ["verschwinden","—","verschwand","verschwände","verschwunden","消える","sein"],
  ["wachsen","du wächst","wuchs","wüchse","gewachsen","成長する","sein"],
  ["waschen","du wäschst","wusch","wüsche","gewaschen","洗う","haben"],
  ["wenden","—","wandte / wendete","wendete","gewandt / gewendet","向ける","haben"],
  ["werden","du wirst","wurde","würde","geworden / worden","〜になる","sein"],
  ["werfen","du wirfst","warf","würfe","geworfen","投げる","haben"],
  ["wissen","ich weiß","wusste","wüsste","gewusst","知っている","haben"],
  ["wollen","ich will","wollte","wollte","gewollt","〜したい","haben"],
  ["ziehen","—","zog","zöge","gezogen","引く・移る","sein / haben"]
];

const vocab = {
  "01 国・言語・人": `Deutschland|ドイツ;Deutsch|ドイツ語;der Deutsche / die Deutsche|ドイツ人;Frankreich|フランス;Französisch|フランス語;der Franzose / die Französin|フランス人;England|イギリス;Englisch|英語;der Engländer / die Engländerin|イギリス人;Spanien|スペイン;Spanisch|スペイン語;der Spanier / die Spanierin|スペイン人;Italien|イタリア;Italienisch|イタリア語;der Italiener / die Italienerin|イタリア人;die Schweiz|スイス;der Schweizer / die Schweizerin|スイス人;Österreich|オーストリア;der Österreicher / die Österreicherin|オーストリア人;Russland|ロシア;Russisch|ロシア語;der Russe / die Russin|ロシア人;China|中国;Chinesisch|中国語;der Chinese / die Chinesin|中国人;Korea|韓国;Koreanisch|韓国語;der Koreaner / die Koreanerin|韓国人;Japan|日本;Japanisch|日本語;der Japaner / die Japanerin|日本人`,
  "02 専攻・学問": `das Studium|学問・大学での勉強;Politologie|政治学;Jura|法学;Wirtschaftswissenschaften|経済学;Pädagogik|教育学;Soziologie|社会学;Psychologie|心理学;Geschichte|歴史学;Kunst|芸術;Kultur|文化;Germanistik|ドイツ学;Japanologie|日本学;Literatur|文学;Sprachwissenschaft|言語学;Mathematik|数学;Biologie|生物学;Chemie|化学;Physik|物理学;Technik|工学;Elektrotechnik|電気工学;Informatik|情報学;Medizin|医学;Pharmazeutik|薬学`,
  "03 身分・職業": `der Beruf|職業;der Lehrer / die Lehrerin|教師;der Student / die Studentin|学生;der Politiker / die Politikerin|政治家;der Journalist / die Journalistin|記者;der Schriftsteller / die Schriftstellerin|作家;der Schauspieler / die Schauspielerin|俳優;der Bankier / die Bankierin|銀行家;der Diplomat / die Diplomatin|外交官;der Beamte / die Beamtin|公務員;der Angestellte / die Angestellte|会社員;der Kaufmann / die Kauffrau|商人;der Arzt / die Ärztin|医師;die Krankenschwester|看護師;der Anwalt / die Anwältin|弁護士;der Ingenieur / die Ingenieurin|技師`,
  "04 飲み物・食べ物": `das Getränk|飲み物;der Kaffee|コーヒー;der Tee|茶;die Milch|牛乳;das Wasser|水;das Mineralwasser|ミネラルウォーター;der Saft|ジュース;der Alkohol|アルコール;das Bier|ビール;der Wein|ワイン;der Sekt|発泡ワイン;der Schnaps|蒸留酒;das Essen|食べ物・食事;das Brot|パン;die Butter|バター;das Ei|卵;das Fleisch|肉;der Zucker|砂糖;das Salz|塩;die Suppe|スープ;das Schnitzel|カツレツ;die Wurst|ソーセージ;die Nudeln|麺類;der Salat|サラダ;der Käse|チーズ;der Kuchen|ケーキ;das Gemüse|野菜;der Kohl|キャベツ;die Tomate|トマト;die Möhre|にんじん;die Kartoffel|じゃがいも;die Zwiebel|玉ねぎ;das Obst|果物;der Apfel|りんご;die Banane|バナナ;die Birne|洋なし;die Erdbeere|いちご;die Johannisbeere|すぐり;die Orange|オレンジ;die Pflaume|すもも;die Weintraube|ぶどう;die Zitrone|レモン`,
  "05 通貨・銀行": `die Bank|銀行;der Schalter|窓口;die Wechselstube|両替所;der Wechselkurs|為替レート;die Währung|通貨;das Geld|お金;der Schein|紙幣;die Münze|硬貨;der Reisescheck|トラベラーズチェック;die Gebühr|手数料;die Kreditkarte|クレジットカード;der Geldautomat|ATM;der Dollar|ドル;der Euro|ユーロ;das Pfund|ポンド;der Franken|フラン;die Krone|クローネ;der Rubel|ルーブル;der Yen|円;der Yuan|元`,
  "06 家族・親戚": `die Familie|家族;die Eltern|両親;der Vater|父;die Mutter|母;der Mann|夫;die Frau|妻;das Kind|子ども;der Sohn|息子;die Tochter|娘;die Geschwister|きょうだい;der Bruder|兄弟;die Schwester|姉妹;der / die Verwandte|親戚;der Großvater|祖父;die Großmutter|祖母;der Enkel / die Enkelin|孫;der Onkel|おじ;die Tante|おば;der Cousin / die Cousine|いとこ;der Neffe|甥;die Nichte|姪`,
  "07 街の建物": `die Stadt|町;der Bahnhof|駅;die Haltestelle|停留所;der Park|公園;der Zoo / der Tierpark|動物園;der Parkplatz|駐車場;die Post|郵便局;die Bank|銀行;das Rathaus|市役所;das Museum|博物館;die Kirche|教会;der Tempel|神殿・寺院;der Schrein|神社;der Turm|塔;das Kaufhaus|デパート;der Supermarkt|スーパー;das Restaurant|レストラン;das Café|喫茶店;die Gaststätte|飲食店;die Kneipe|飲み屋;das Hotel|ホテル;der Hafen|港;der Flughafen|空港`,
  "08 家具・部屋": `das Haus|家;die Wohnung|住まい;das Zimmer|部屋;die Küche|台所;das Bad|浴室;die Dusche|シャワー;die Toilette|トイレ;die Tür|ドア;das Fenster|窓;der Boden|床;die Treppe|階段;der Garten|庭;die Garage|車庫;das Möbel|家具;der Tisch|机;der Stuhl|椅子;das Sofa|ソファ;der Schrank|戸棚;das Regal|本棚;der Spiegel|鏡;die Vase|花瓶;der Teppich|じゅうたん;der Vorhang|カーテン;der Fernseher|テレビ;das Radio|ラジオ;der CD-Spieler|CDプレーヤー;die Kamera|カメラ;die Videokamera|ビデオカメラ;der Computer|コンピューター;das Telefon|電話;das Handy|携帯電話;der Kühlschrank|冷蔵庫;die Waschmaschine|洗濯機;der Staubsauger|掃除機`,
  "09 スポーツ・趣味": `Tennis spielen|テニスをする;Fußball spielen|サッカーをする;Volleyball spielen|バレーをする;Tischtennis spielen|卓球をする;Golf spielen|ゴルフをする;Judo machen|柔道をする;Karate machen|空手をする;schwimmen|泳ぐ;turnen|体操をする;reiten|馬に乗る;joggen|ジョギングする;Ski fahren|スキーをする;eislaufen|スケートする;Klavier spielen|ピアノを弾く;Geige spielen|バイオリンを弾く;Flöte spielen|フルートを吹く;Orgel spielen|オルガンを弾く;Musik hören|音楽を聴く;singen|歌う;Bücher lesen|本を読む;Zeitungen lesen|新聞を読む;Zeitschriften lesen|雑誌を読む;Romane lesen|小説を読む;Krimis lesen|推理小説を読む;Karten spielen|トランプをする;Schach spielen|チェスをする;Mah-Jongg spielen|麻雀をする;malen|絵の具で描く;zeichnen|線画を描く;fotografieren|写真を撮る`,
  "10 曜日・月・四季": `Montag|月曜日;Dienstag|火曜日;Mittwoch|水曜日;Donnerstag|木曜日;Freitag|金曜日;Samstag / Sonnabend|土曜日;Sonntag|日曜日;Januar|1月;Februar|2月;März|3月;April|4月;Mai|5月;Juni|6月;Juli|7月;August|8月;September|9月;Oktober|10月;November|11月;Dezember|12月;der Frühling|春;der Sommer|夏;der Herbst|秋;der Winter|冬`,
  "11 自然": `die Natur|自然;der Berg|山;der Fluss|川;der Bach|小川;das Feld|野原;die Wiese|草地;das Gebirge|山地;der Wald|森;der Himmel|空;das Meer|海;die Insel|島`,
  "12 評価形容詞": `viel — wenig|多い — 少ない;groß — klein|大きい — 小さい;schwer — leicht|重い・難しい — 軽い・易しい;schnell — langsam|速い — 遅い;hoch — niedrig|高い — 低い;weit — eng|広い — 狭い;fern — nah(e)|遠い — 近い;lang — kurz|長い — 短い;stark — schwach|強い — 弱い;leise — laut|静かな — 大きな音の;bekannt — unbekannt|有名な — 未知の;teuer — billig|高価な — 安い;sauber — schmutzig|清潔な — 汚れた;alt — neu|古い — 新しい;schön — hässlich|美しい — 醜い;gut — schlecht|良い — 悪い;elegant / schick — grell|上品な — 派手な;praktisch — unpraktisch|実用的な — 非実用的な;bequem — unbequem|快適な — 不快な`,
  "13 天気": `das Wetter|天気;sonnig|よく晴れた;heiter|晴れた;wolkig|曇った;bedeckt|全天が曇った;neblig|霧の;warm|暖かい;heiß|暑い;kühl|涼しい;kalt|寒い;die Temperatur|気温;die Wetterkarte|天気図;der Regen|雨;der Schnee|雪;der Schauer|にわか雨;das Gewitter|雷雨;der Hochdruck|高気圧;der Tiefdruck|低気圧`,
  "14 身体部位": `der Körper|体;der Arm|腕;das Auge|目;der Finger|指;der Fuß|足先;das Bein|脚;das Gesicht|顔;die Schulter|肩;das Haar|髪;die Hand|手;der Kopf|頭;der Mund|口;die Nase|鼻;das Ohr|耳`,
  "15 健康・病気": `die Gesundheit|健康;die Krankheit|病気;der Kranke / die Kranke|病人;der Patient / die Patientin|患者;das Fieber|熱;der Schmerz|痛み;die Wunde|傷;die Operation|手術;das Rezept|処方箋;die Medizin|薬;die Apotheke|薬局`,
  "16 教育・学校": `die Fremdsprache|外国語;die Hausaufgaben|宿題;die Pause|休憩;das Semester|学期;der Unterricht|授業;die Vorlesung|大学の講義;der Kindergarten|幼稚園;die Schule|学校;die Grundschule|小学校;das Gymnasium|ギムナジウム;die Hochschule|単科大学;die Universität|大学;das Studentenheim|学生寮;die Mensa|学生食堂`
};

const vocabEntries = Object.entries(vocab).flatMap(([category, raw]) => raw.split(";").map(item => {
  const [word, jp] = item.split("|"); return {category, word, jp};
}));
const foundationQuestions = [
  {id:"f01",unitId:"foundation",unitTitle:"前期補修",mode:"fill",tag:"現在人称変化",prompt:"空所に正しい形を入れてください。",source:"Ich ___ Deutscher. ___ Sie auch Deutscher? (sein)",answers:["bin, Sind","bin Sind"],hint:"ich と Sie の sein。",explanation:"ich bin / Sie sind。"},
  {id:"f02",unitId:"foundation",unitTitle:"前期補修",mode:"fill",tag:"現在人称変化",prompt:"空所に正しい形を入れてください。",source:"Morgen ___ Lena nach München. (fahren)",answers:["fährt"],hint:"3人称単数でa→ä。",explanation:"Lena = sie、fahren → fährt。"},
  {id:"f03",unitId:"foundation",unitTitle:"前期補修",mode:"fill",tag:"現在人称変化",prompt:"空所に正しい形を入れてください。",source:"Du ___ sehr gut Englisch. (sprechen)",answers:["sprichst"],hint:"e→i の語幹変化。",explanation:"du sprichst。"},
  {id:"f04",unitId:"foundation",unitTitle:"前期補修",mode:"fill",tag:"命令形",prompt:"duに対する命令形を1語で入れてください。",source:"___ nicht so schnell! (sprechen)",answers:["Sprich"],hint:"duの語尾を外し、語幹変化を残します。",explanation:"Sprich! となります。"},
  {id:"f05",unitId:"foundation",unitTitle:"前期補修",mode:"fill",tag:"命令形",prompt:"ihrに対する命令形を1語で入れてください。",source:"___ eurer Mutter! (helfen)",answers:["Helft"],hint:"ihrの現在形から主語ihrを外します。",explanation:"ihr helft → Helft!"},
  {id:"f06",unitId:"foundation",unitTitle:"前期補修",mode:"fill",tag:"冠詞・格",prompt:"空所2つを「,」で区切って入力してください。",source:"Ich suche ___ Supermarkt. Dort ist ___ Bank.",answers:["einen, eine","einen eine"],hint:"suchenの目的語は4格。Bankは女性1格。",explanation:"einen Supermarkt / eine Bank。"},
  {id:"f07",unitId:"foundation",unitTitle:"前期補修",mode:"fill",tag:"所有冠詞",prompt:"空所に所有冠詞を入れてください。",source:"Ist das ___ Familienfoto, Yumi? (du)",answers:["dein"],hint:"Fotoは中性1格。",explanation:"dein Familienfoto。"},
  {id:"f08",unitId:"foundation",unitTitle:"前期補修",mode:"fill",tag:"格語尾",prompt:"空所に格語尾を含む形を入れてください。",source:"Heute helfe ich ___ Vater. (unser)",answers:["unserem"],hint:"helfenは3格支配、Vaterは男性。",explanation:"男性3格: unserem Vater。"},
  {id:"f09",unitId:"foundation",unitTitle:"前期補修",mode:"translate",tag:"冠詞・格",prompt:"ドイツ語に訳してください。",source:"私はそのパソコンをとてもお買い得だと思います。",answers:["Ich finde den PC sehr preiswert.","Ich finde den Computer sehr preiswert."],hint:"finden + 4格、PCは男性。",explanation:"der PC → den PC。"},
  {id:"f10",unitId:"foundation",unitTitle:"前期補修",mode:"translate",tag:"否定冠詞",prompt:"ドイツ語に訳してください。",source:"弟が一人います。でも姉妹はいません。",answers:["Ich habe einen Bruder. Aber ich habe keine Schwestern.","Ich habe einen Bruder, aber keine Schwestern."],hint:"Bruderは男性4格、Schwesternは複数4格。",explanation:"einen Bruder / keine Schwestern。"},
  {id:"f11",unitId:"foundation",unitTitle:"前期補修",mode:"translate",tag:"数詞",prompt:"式をドイツ語で綴ってください。",source:"36 + 15 = 51",answers:["Sechsunddreißig plus fünfzehn ist einundfünfzig."],hint:"1の位を先、und、10の位の順です。",explanation:"sechs-und-dreißig / ein-und-fünfzig。"},
  {id:"f12",unitId:"foundation",unitTitle:"前期補修",mode:"order",tag:"自己紹介",prompt:"語句を使い、正しい自己紹介文を作ってください。",source:"（私は札幌に住み、情報学を専攻しています）",answers:["Ich wohne in Sapporo und studiere Informatik."],hint:"wohnen in + 3格。学問名には冠詞を付けません。",explanation:"Ich wohne … und studiere … の語順です。"}
];
const selectionQuestions = [
  {id:"s01",unitId:"perfect",unitTitle:"過去・現在完了",mode:"choice",tag:"過去分詞",prompt:"正しい過去分詞を選んでください。",source:"studieren",options:["gestudiert","studiert","gestudieren","studieren"],answers:["studiert"],hint:"-ierenで終わる動詞にge-は付きません。",explanation:"studieren → studiert。"},
  {id:"s02",unitId:"perfect",unitTitle:"過去・現在完了",mode:"choice",tag:"助動詞",prompt:"正しい文を選んでください。",source:"私は早く起きました。",options:["Ich habe früh aufgestanden.","Ich bin früh aufgestanden.","Ich ist früh aufgestanden.","Ich bin früh geaufstanden."],answers:["Ich bin früh aufgestanden."],hint:"aufstehenは状態変化を表します。",explanation:"sein支配で、過去分詞はaufgestandenです。"},
  {id:"s03",unitId:"zu",unitTitle:"zu不定詞・es",mode:"choice",tag:"zuの位置",prompt:"正しいzu不定詞を選んでください。",source:"abfahren",options:["zu abfahren","abfahren zu","abzufahren","zuabfahren"],answers:["abzufahren"],hint:"分離動詞では前つづりと語幹の間にzuを置きます。",explanation:"ab + zu + fahren = abzufahren。"},
  {id:"s04",unitId:"zu",unitTitle:"zu不定詞・es",mode:"choice",tag:"非人称es",prompt:"正しい文を選んでください。",source:"今日は雨が降っています。",options:["Heute gibt es Regen.","Heute es regnet.","Heute regnet es.","Heute ist es regnen."],answers:["Heute regnet es."],hint:"天候動詞regnenの主語はesです。",explanation:"文頭に副詞を置く場合は Heute regnet es. となります。"},
  {id:"s05",unitId:"reflexive",unitTitle:"再帰表現・比較",mode:"choice",tag:"再帰格",prompt:"空所に入る語を選んでください。",source:"Ich wasche ___ die Hände.",options:["mich","mir","sich","mein"],answers:["mir"],hint:"die Händeが4格目的語です。",explanation:"別の4格目的語があるため、再帰代名詞は3格mirです。"},
  {id:"s06",unitId:"reflexive",unitTitle:"再帰表現・比較",mode:"choice",tag:"比較変化",prompt:"正しい比較級を選んでください。",source:"gut",options:["guter","güter","besser","mehr gut"],answers:["besser"],hint:"不規則変化です。",explanation:"gut → besser → am besten。"},
  {id:"s07",unitId:"passive",unitTitle:"受動",mode:"choice",tag:"受動変換",prompt:"正しい受動文を選んでください。",source:"Man baut jetzt die U-Bahn.",options:["Die U-Bahn ist jetzt gebaut.","Die U-Bahn wird jetzt gebaut.","Die U-Bahn hat jetzt gebaut.","Jetzt wird die U-Bahn bauen."],answers:["Die U-Bahn wird jetzt gebaut."],hint:"現在の動作受動です。",explanation:"werdenの定形 + 過去分詞で作ります。"},
  {id:"s08",unitId:"passive",unitTitle:"受動",mode:"choice",tag:"状態受動",prompt:"状態を表す文を選んでください。",source:"窓は開いている。",options:["Das Fenster wird geöffnet.","Das Fenster ist geöffnet.","Das Fenster hat geöffnet.","Das Fenster wurde öffnen."],answers:["Das Fenster ist geöffnet."],hint:"動作の結果としての状態です。",explanation:"状態受動はsein + 過去分詞です。"},
  {id:"s09",unitId:"relative",unitTitle:"関係詞",mode:"choice",tag:"関係格",prompt:"空所に入る関係代名詞を選んでください。",source:"Da kommt der Bus, ___ zur Uni fährt.",options:["den","dem","der","dessen"],answers:["der"],hint:"Busは男性単数で、関係文の主語です。",explanation:"男性1格なのでderです。"},
  {id:"s10",unitId:"relative",unitTitle:"関係詞",mode:"choice",tag:"前置詞",prompt:"空所に入る関係代名詞を選んでください。",source:"Der Bus, mit ___ wir zur Uni fahren, kommt gleich.",options:["den","dem","der","dessen"],answers:["dem"],hint:"mitは3格支配です。",explanation:"男性単数3格なのでdemです。"},
  {id:"s11",unitId:"subjunctive",unitTitle:"接続法",mode:"choice",tag:"接続法第1式",prompt:"seinの接続法第1式を選んでください。",source:"Er sagt, er ___ müde.",options:["ist","war","sei","wäre"],answers:["sei"],hint:"間接話法の基本形です。",explanation:"seinの接続法第1式3人称単数はseiです。"},
  {id:"s12",unitId:"subjunctive",unitTitle:"接続法",mode:"choice",tag:"接続法第2式",prompt:"空所に入る語を選んでください。",source:"Wenn ich Zeit ___, würde ich in die Stadt fahren.",options:["habe","hatte","hätte","haben"],answers:["hätte"],hint:"現在の事実に反する仮定です。",explanation:"habenの接続法第2式はhätteです。"}
];
const allQuestions = [
  ...units.flatMap(unit => unit.questions.map(question => ({...question, unitId: unit.id, unitTitle: unit.title}))),
  ...foundationQuestions,
  ...selectionQuestions,
  ...(globalThis.EXPANDED_QUESTIONS || [])
];

const examSets = [
  { id: 1, title: "構造変換・基礎", subtitle: "全6単元の基本操作", minutes: 30, ids: ["p01","p03","z02","z05","r01","r04","v01","v05","l01","l04","k01","k05"] },
  { id: 2, title: "和文独訳・応用", subtitle: "語順と失点耐性", minutes: 30, ids: ["p06","p07","z03","z07","r06","r07","v03","v07","l06","l08","k03","k06"] }
];

const STORAGE_KEY = "pruefwerk-progress-v1";
const defaultProgress = { answered: 0, correct: 0, today: 0, todayDate: "", streak: 0, lastDate: "", byUnit: {}, wrongTags: {}, review: [], completed: [], exams: [], vocabStats: {answered:0, correct:0}, vocabMastery: {} };
let progress = loadProgress();
let practice = { unit: "all", mode: "all", index: 0, pool: [], selected: "", checked: false, reviewOnly: false };
let selectedUnit = "perfect";
let examState = null;
let examTimer = null;
let vocabQuiz = { stage:"setup", categories:[...Object.keys(vocab)], direction:"de-jp", mode:"all", count:20, questions:[], index:0, correct:0, answered:false, selected:"", results:[] };

function loadProgress() {
  try { return {...defaultProgress, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")}; }
  catch { return {...defaultProgress}; }
}
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); updateSidebar(); }
function localDay() { return new Date().toLocaleDateString("sv-SE"); }
function syncToday() {
  const today = localDay();
  if (progress.todayDate !== today) { progress.today = 0; progress.todayDate = today; }
}
function touchDay() {
  syncToday();
  const today = localDay();
  if (progress.lastDate !== today) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    progress.streak = progress.lastDate === yesterday.toLocaleDateString("sv-SE") ? progress.streak + 1 : 1;
    progress.lastDate = today;
  }
}
function esc(value = "") { return String(value).replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch])); }
function normalize(value = "") { return value.toLowerCase().normalize("NFC").replace(/ß/g,"ss").replace(/[„“”"'’.,!?;:()—–-]/g," ").replace(/\s+/g," ").trim(); }
function isCorrect(question, value) { return question.answers.some(answer => normalize(answer) === normalize(value)); }
function route() { return (location.hash.slice(1).split("/")[0] || "home"); }
function routeArg() { return location.hash.slice(1).split("/")[1] || ""; }
function go(hash) { location.hash = hash; }
function toast(message) { const el = document.getElementById("toast"); el.textContent = message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 2400); }
function unitStats(id) { return progress.byUnit[id] || {answered:0, correct:0}; }
function pct(correct, answered) { return answered ? Math.round(correct / answered * 100) : 0; }
function updateSidebar() {
  syncToday();
  const val = Math.min(12, progress.today || 0);
  const bar = document.getElementById("sidebar-progress");
  const label = document.getElementById("sidebar-label");
  if (bar) bar.style.width = `${val / 12 * 100}%`;
  if (label) label.textContent = `${val} / 12 問`;
}
function updateNav() {
  const activeRoute = route() === "vocabquiz" ? "vocab" : route();
  document.querySelectorAll("[data-route]").forEach(link => link.classList.toggle("active", link.dataset.route === activeRoute));
}
function pageHeader(kicker, title, text, action = "") {
  return `<div class="page-header"><div><span class="eyebrow">${kicker}</span><h1>${title}</h1><p>${text}</p></div>${action}</div>`;
}

function renderHome() {
  const mastery = pct(progress.correct, progress.answered);
  const reviewCount = progress.review.length;
  const topUnits = units.slice(0, 6).map(unit => {
    const stats = unitStats(unit.id), value = pct(stats.correct, stats.answered);
    return `<article class="card unit-card" style="--accent:${unit.accent}" data-open-unit="${unit.id}" tabindex="0" role="button">
      <div class="unit-no"><span>Lektion ${unit.number}</span><i class="dot"></i></div><h3>${unit.title}</h3><p>${unit.summary}</p>
      <div class="card-footer"><span>${value}% 習得</span><span>→</span></div></article>`;
  }).join("");
  return `<div class="page">
    <section class="quick-strip card"><div class="quick-strip-copy"><div><span class="eyebrow">3〜5分</span><strong class="quick-label">すきま時間に</strong></div><p>文法の選択問題または語彙の4択クイズをすぐに始められます。</p></div><div class="quick-actions"><button class="button" data-quick-choice>文法の選択問題</button><button class="button secondary" data-go="vocabquiz">語彙の基本クイズ</button></div></section>
    <section class="hero"><div class="hero-content"><span class="eyebrow">北海道大学 ドイツ語 後期</span><h1>ドイツ語<br>後期試験対策</h1><p>Lektion 7〜12の文法、指定語彙、不規則動詞を教材に沿って学習します。選択式と記述式の両方に対応しています。</p><div class="hero-actions"><button class="button lime" data-go="practice">通常問題を解く <span>→</span></button><button class="button ghost" data-go="learn">文法を確認する</button></div></div></section>
    <section class="stats-grid">
      <div class="card stat-card"><strong>${progress.streak || 0}<small>日</small></strong><span>学習ストリーク</span></div>
      <div class="card stat-card"><strong>${mastery}<small>%</small></strong><span>総合正答率</span></div>
      <div class="card stat-card"><strong>${progress.answered}</strong><span>作成した答案</span></div>
      <div class="card stat-card"><strong>${reviewCount}</strong><span>復習待ち</span></div>
    </section>
    <div class="section-heading"><div><span class="eyebrow">後期文法</span><h2>Lektion 7〜12</h2><p>教科書の掲載順に文法を確認できます。</p></div><button class="button secondary" data-go="learn">すべて見る</button></div>
    <section class="unit-grid">${topUnits}</section>
    <div class="section-heading"><div><span class="eyebrow">学習例</span><h2>25分の学習内容</h2></div></div>
    <section class="split-grid">
      <div class="card today-card"><h2>1回の学習例</h2><div class="today-list">
        <div class="today-row"><b>03</b><span>前回の失点復習</span><small>3分</small></div>
        <div class="today-row"><b>05</b><span>活用・格の形を再現</span><small>5分</small></div>
        <div class="today-row"><b>11</b><span>誘導付き→無誘導の文変換</span><small>11分</small></div>
        <div class="today-row"><b>06</b><span>和文独訳と退出問題</span><small>6分</small></div>
      </div>
      <div class="card risk-card"><span class="eyebrow">Loss risk</span><h2>失点リスク</h2>${riskBars()}</div>
    </section>
  </div>`;
}

function riskBars() {
  const tags = Object.entries(progress.wrongTags).sort((a,b)=>b[1]-a[1]).slice(0,4);
  if (!tags.length) return `<div class="empty"><strong>まだデータがありません</strong>答案を解くと、弱点がここに現れます。</div>`;
  const max = Math.max(...tags.map(x=>x[1]));
  return `<div class="risk-bars">${tags.map(([tag,n]) => `<div class="risk-row"><div class="label"><span>${esc(tag)}</span><b>${n}回</b></div><div class="bar"><i style="width:${n/max*100}%"></i></div></div>`).join("")}</div>`;
}

function renderLearn() {
  const arg = routeArg(); if (arg && units.some(u=>u.id===arg)) selectedUnit = arg;
  const unit = units.find(u => u.id === selectedUnit) || units[0];
  return `<div class="page">${pageHeader("後期文法", "Lektion 7〜12", "各課の文法説明、例文、練習問題を確認できます。")}
    <div class="learn-layout">
      <aside class="card unit-menu">${units.map(u=>`<button data-unit="${u.id}" class="${u.id===unit.id?"active":""}"><small>Lektion ${u.number}</small><strong>${u.title}</strong></button>`).join("")}</aside>
      <article class="card lesson"><header class="lesson-hero"><span class="eyebrow">Lektion ${unit.number} · ${unit.subtitle}</span><h2>${unit.title}</h2><p>${unit.summary}</p><div class="goal-pills">${unit.goals.map(x=>`<span class="pill">${x}</span>`).join("")}</div></header>
        <div class="lesson-body">${unit.theory.map(block=>`<section class="theory-block"><span class="eyebrow">Rule</span><h3>${block.title}</h3><p>${block.text}</p><div class="formula">${block.formula}</div><ul class="example-list">${block.examples.map(([de,jp])=>`<li><b lang="de">${de}</b><small>${jp}</small></li>`).join("")}</ul></section>`).join("")}
        <div class="lesson-actions"><button class="button" data-practice-unit="${unit.id}">この単元を演習する →</button><button class="button ghost" data-complete-unit="${unit.id}">${progress.completed.includes(unit.id)?"復習済み ✓":"学習済みにする"}</button></div></div>
      </article>
    </div>
  </div>`;
}

function buildPracticePool() {
  let pool = practice.reviewOnly
    ? allQuestions.filter(q => progress.review.includes(q.id))
    : allQuestions.filter(q => (practice.unit === "all" || q.unitId === practice.unit) && (practice.mode === "all" || q.mode === practice.mode));
  if (!pool.length && practice.reviewOnly) { practice.reviewOnly = false; pool = allQuestions; }
  if (!pool.length) pool = allQuestions;
  practice.pool = pool;
  practice.index = Math.min(practice.index, pool.length - 1);
}
function renderPractice() {
  buildPracticePool();
  const q = practice.pool[practice.index] || allQuestions[0];
  const unit = units.find(u=>u.id===q.unitId) || {number:"F", title:"前期補修"};
  const answerControl = q.mode === "choice"
    ? `<div class="choices">${q.options.map(option=>`<button class="choice ${practice.selected===option?"selected":""}" data-choice="${esc(option)}">${esc(option)}</button>`).join("")}</div>`
    : `<textarea id="practice-answer" class="answer-area" lang="${q.mode==="de2jp"?"ja":"de"}" placeholder="${q.mode==="de2jp"?"日本語訳を入力してください":"全文を入力してください"}" spellcheck="false"></textarea>${q.mode==="de2jp"?"":`<div class="umlaut-row" aria-label="ドイツ語文字入力">${["ä","ö","ü","Ä","Ö","Ü","ß"].map(c=>`<button type="button" data-char="${c}">${c}</button>`).join("")}</div>`}`;
  return `<div class="page">${pageHeader("練習問題", "答案トレーニング", "各Lektionに6形式を20問以上収録しています。")}
    <div class="filters card"><div class="field"><label>単元</label><select id="practice-unit">${["all",...units.map(u=>u.id),"foundation"].map(id=>`<option value="${id}" ${practice.unit===id?"selected":""}>${id==="all"?"全範囲":id==="foundation"?"前期補修":units.find(u=>u.id===id).title}</option>`).join("")}</select></div><div class="field"><label>出題形式</label><select id="practice-mode">${[["all","すべて"],["choice","選択式"],["fill","穴埋め"],["transform","文変換"],["order","語順"],["translate","和文独訳"],["de2jp","独文和訳"]].map(([id,label])=>`<option value="${id}" ${practice.mode===id?"selected":""}>${label}</option>`).join("")}</select></div><div class="field grow"><label>${practice.reviewOnly?"復習キュー":"進行"}</label><div class="progress-track" style="margin-top:17px"><i style="width:${(practice.index+1)/practice.pool.length*100}%"></i></div></div></div>
    <div class="practice-layout">
      <article class="card question-card"><div class="question-top"><small>${unit.number==="F"?"前期補修":`Lektion ${unit.number}`} · ${unit.title}</small><small>${practice.index+1} / ${practice.pool.length}</small></div><div class="question-main"><span class="eyebrow">${modeLabel(q.mode)} · ${q.tag}</span><h2>${q.prompt}</h2><p class="prompt-note">${q.mode==="choice"?"1つ選んで採点してください。":"模範解答と照合して採点します。"}</p><div class="source-sentence" lang="${q.mode==="translate"?"ja":"de"}">${esc(q.source)}</div>${answerControl}<div id="practice-feedback"></div><div class="question-actions"><button class="button ghost" id="show-hint">ヒントを見る</button><button class="button lime" id="check-answer">採点する →</button></div></div></article>
      <aside class="practice-side"><div class="card side-card"><span class="eyebrow">出題形式</span><h3>問題を選ぶ</h3><div class="mode-list">${[["all","すべて混ぜる"],["choice","選択式"],["fill","穴埋め"],["transform","文変換"],["order","語順"],["translate","和文独訳"],["de2jp","独文和訳"]].map(([id,label])=>`<button data-set-mode="${id}" class="${practice.mode===id?"active":""}">${label}</button>`).join("")}</div></div><div class="card side-card"><span class="eyebrow">復習</span><h3>復習キュー</h3><p class="tiny">誤答は自動でここに追加されます。</p><strong>${progress.review.length} 問</strong>${progress.review.length?`<button class="button ghost mt" id="review-only">復習だけ解く</button>`:""}</div></aside>
    </div>
  </div>`;
}
function modeLabel(mode) { return ({transform:"文変換",fill:"穴埋め",translate:"和文独訳",de2jp:"独文和訳",order:"語順",choice:"選択式"})[mode] || mode; }

function renderVerbs() {
  return `<div class="page">${pageHeader("教材収録", "不規則動詞80語", "現在形、過去形、接続法第2式、過去分詞を一覧で確認できます。", `<button class="button" id="verb-quiz">ランダム問題</button>`)}
    <div class="filters card"><div class="field grow"><label>検索</label><input id="verb-search" type="search" placeholder="gehen / 行く / gegangen"></div><div class="field"><label>完了助動詞</label><select id="verb-aux"><option value="all">すべて</option><option value="sein">seinを含む</option><option value="haben">habenを含む</option></select></div><span class="count-badge" id="verb-count">${verbs.length}語</span></div>
    <div class="matrix-wrap"><table class="matrix"><thead><tr><th>不定詞</th><th>直説法現在</th><th>直説法過去</th><th>接続法第2式</th><th>過去分詞</th><th>意味</th><th>完了助動詞</th></tr></thead><tbody id="verb-body">${verbRows(verbs)}</tbody></table></div>
  </div>`;
}
function verbRows(list) { return list.map(v=>`<tr>${v.map((cell,i)=>`<td class="${i===5?"jp":""}">${esc(cell)}</td>`).join("")}</tr>`).join(""); }

function renderVocab() {
  const active = sessionStorage.getItem("vocab-category") || "all";
  const shown = active === "all" ? vocabEntries : vocabEntries.filter(v=>v.category===active);
  return `<div class="page">${pageHeader("教材収録", "指定語彙", "教材の語彙を16分野に分けて収録しています。", `<button class="button" data-go="vocabquiz">基本クイズを始める</button>`)}
    <div class="filters card"><div class="field grow"><label>語句を検索</label><input id="vocab-search" type="search" placeholder="Universität / 大学"></div><span class="count-badge" id="vocab-count">${shown.length}語句</span></div>
    <div class="vocab-categories"><button data-vcat="all" class="${active==="all"?"active":""}">すべて</button>${Object.keys(vocab).map(cat=>`<button data-vcat="${esc(cat)}" class="${active===cat?"active":""}">${esc(cat)}</button>`).join("")}</div>
    <div class="vocab-grid" id="vocab-grid">${vocabCards(shown)}</div>
  </div>`;
}
function vocabCards(list) { return list.map(v=>`<article class="card vocab-card"><span>${esc(v.category)}</span><strong lang="de">${esc(v.word)}</strong><span>${esc(v.jp)}</span></article>`).join("") || `<div class="empty"><strong>見つかりません</strong>検索語を変えてください。</div>`; }

function shuffled(list) {
  const out = [...list];
  for (let i=out.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [out[i],out[j]]=[out[j],out[i]]; }
  return out;
}
function vocabMasteryKey(entry) { return `${vocabQuiz.direction}:${entry.word}`; }
function startVocabQuiz() {
  if (!vocabQuiz.categories.length) { toast("分野を1つ以上選んでください"); return; }
  let pool = vocabEntries.filter(v=>vocabQuiz.categories.includes(v.category));
  if (vocabQuiz.mode === "priority") {
    const priority = pool.filter(v=>progress.vocabMastery[vocabMasteryKey(v)] !== true);
    if (priority.length) pool = priority; else toast("苦手語がないため、選択範囲から出題します");
  }
  const requested = vocabQuiz.count === "all" ? pool.length : Number(vocabQuiz.count);
  const selected = shuffled(pool).slice(0, Math.min(requested, pool.length));
  vocabQuiz.questions = selected.map(entry => {
    const target = vocabQuiz.direction === "de-jp" ? entry.jp : entry.word;
    const sameCategory = shuffled(vocabEntries.filter(v=>v.category===entry.category && v.word!==entry.word));
    const fallback = shuffled(vocabEntries.filter(v=>v.word!==entry.word));
    const candidates = [...sameCategory,...fallback].map(v=>vocabQuiz.direction === "de-jp" ? v.jp : v.word);
    const distractors = [...new Set(candidates)].filter(x=>normalize(x)!==normalize(target)).slice(0,3);
    return {entry, target, options:shuffled([target,...distractors])};
  });
  vocabQuiz.stage="quiz"; vocabQuiz.index=0; vocabQuiz.correct=0; vocabQuiz.answered=false; vocabQuiz.selected=""; vocabQuiz.results=[];
  render();
}
function renderVocabQuiz() {
  if (vocabQuiz.stage === "setup") {
    const allSelected = vocabQuiz.categories.length === Object.keys(vocab).length;
    return `<div class="page">${pageHeader("語彙", "基本クイズ", "中国語アプリと同じように、範囲・出題方向・問題数を選んで4択で練習します。", `<button class="button ghost" data-go="vocab">語彙一覧へ</button>`)}
      <section class="card quiz-setup"><div class="quiz-setup-block"><span class="eyebrow">1. 出題範囲</span><div class="vocab-categories quiz-categories"><button data-vq-all class="${allSelected?"active":""}">すべて</button>${Object.keys(vocab).map(cat=>`<button data-vq-category="${esc(cat)}" class="${vocabQuiz.categories.includes(cat)?"active":""}">${esc(cat)}</button>`).join("")}</div></div>
      <div class="quiz-setup-grid"><div class="quiz-setup-block"><span class="eyebrow">2. 出題方向</span><div class="quiz-options"><button class="quiz-option ${vocabQuiz.direction==="de-jp"?"active":""}" data-vq-direction="de-jp"><strong>ドイツ語 → 日本語</strong><small>意味を4択で答える</small></button><button class="quiz-option ${vocabQuiz.direction==="jp-de"?"active":""}" data-vq-direction="jp-de"><strong>日本語 → ドイツ語</strong><small>ドイツ語を4択で答える</small></button></div></div>
      <div class="quiz-setup-block"><span class="eyebrow">3. 出題モード</span><div class="quiz-options"><button class="quiz-option ${vocabQuiz.mode==="all"?"active":""}" data-vq-mode="all"><strong>全範囲</strong><small>選択分野からランダム</small></button><button class="quiz-option ${vocabQuiz.mode==="priority"?"active":""}" data-vq-mode="priority"><strong>苦手優先</strong><small>未正解・誤答語を優先</small></button></div></div></div>
      <div class="quiz-setup-block"><span class="eyebrow">4. 問題数</span><div class="quiz-counts">${[10,20,30,40,50,"all"].map(n=>`<button data-vq-count="${n}" class="${String(vocabQuiz.count)===String(n)?"active":""}">${n==="all"?"すべて":`${n}問`}</button>`).join("")}</div></div>
      <button class="button lime quiz-start" id="start-vocab-quiz">クイズを始める →</button></section>
    </div>`;
  }
  if (vocabQuiz.stage === "result") {
    const total=vocabQuiz.questions.length, rate=pct(vocabQuiz.correct,total), wrong=vocabQuiz.results.filter(x=>!x.correct);
    return `<div class="page">${pageHeader("語彙", "基本クイズ結果", `${total}問中${vocabQuiz.correct}問正解でした。`)}<section class="card quiz-result"><div class="score-ring" style="--score:${rate}%"><strong>${rate}%</strong></div><h2>${wrong.length?"間違えた語を確認してください":"全問正解です"}</h2>${wrong.length?`<div class="quiz-result-list">${wrong.map(x=>`<div><span lang="de">${esc(x.entry.word)}</span><span>${esc(x.entry.jp)}</span></div>`).join("")}</div>`:""}<div class="lesson-actions"><button class="button lime" id="retry-vocab-quiz">同じ設定でもう一度</button><button class="button ghost" id="setup-vocab-quiz">設定を変える</button><button class="button ghost" data-go="vocab">語彙一覧へ</button></div></section></div>`;
  }
  const current=vocabQuiz.questions[vocabQuiz.index], source=vocabQuiz.direction==="de-jp"?current.entry.word:current.entry.jp;
  const feedback=vocabQuiz.answered?`<div class="feedback ${vocabQuiz.selected===current.target?"":"wrong"}"><strong>${vocabQuiz.selected===current.target?"正解です":"正解を確認してください"}</strong><span lang="de">${esc(current.entry.word)}</span> — ${esc(current.entry.jp)}</div>`:"";
  return `<div class="page">${pageHeader("語彙", "基本クイズ", `${vocabQuiz.direction==="de-jp"?"ドイツ語から日本語":"日本語からドイツ語"}を選びます。`)}<section class="card question-card vocab-quiz-card"><div class="question-top"><small>${esc(current.entry.category)}</small><small>${vocabQuiz.index+1} / ${vocabQuiz.questions.length}</small></div><div class="question-main"><div class="progress-track"><i style="width:${(vocabQuiz.index+1)/vocabQuiz.questions.length*100}%"></i></div><p class="vocab-quiz-label">正しい意味・語句を1つ選んでください。</p><div class="source-sentence vocab-quiz-source" lang="${vocabQuiz.direction==="de-jp"?"de":"ja"}">${esc(source)}</div><div class="choices">${current.options.map(option=>`<button class="choice ${vocabQuiz.selected===option?"selected":""}" data-vocab-choice="${esc(option)}" ${vocabQuiz.answered?"disabled":""}>${esc(option)}</button>`).join("")}</div><div id="vocab-quiz-feedback">${feedback}</div>${vocabQuiz.answered?`<div class="question-actions"><button class="button lime" id="next-vocab-question">${vocabQuiz.index+1===vocabQuiz.questions.length?"結果を見る":"次の問題へ →"}</button></div>`:""}</div></section></div>`;
}

function renderExam() {
  if (!examState) return `<div class="page">${pageHeader("試験対策", "模擬試験", "Lektion 7〜12を30分で解きます。採点後は間違いの種類を確認できます。")}
    <section class="exam-cover">${examSets.map(set=>`<article class="card exam-set"><span class="set-no">0${set.id}</span><span class="eyebrow">模擬試験</span><h2>${set.title}</h2><p>${set.subtitle}</p><div class="exam-meta"><span>◷ ${set.minutes}分</span><span>✎ ${set.ids.length}問</span><span>100点</span></div><button class="button" data-start-exam="${set.id}">試験を開始する →</button></article>`).join("")}</section>
    <div class="card today-card mt"><span class="eyebrow">Scoring rubric</span><h2>和文独訳の配点</h2><div class="today-list"><div class="today-row"><b>40</b><span>指定文法の実現</span><small>40%</small></div><div class="today-row"><b>25</b><span>活用・格・語尾</span><small>25%</small></div><div class="today-row"><b>20</b><span>語順</span><small>20%</small></div><div class="today-row"><b>15</b><span>語彙・綴り・大文字</span><small>15%</small></div></div></div>
  </div>`;
  if (examState.result) return renderExamResult();
  const set = examSets.find(s=>s.id===examState.id);
  const questions = set.ids.map(id=>allQuestions.find(q=>q.id===id));
  return `<div class="page"><div class="exam-bar"><div><span class="tiny">模擬試験 0${set.id}</span><strong>${set.title}</strong></div><div class="timer" id="exam-timer">${formatTime(examState.remaining)}</div><button class="button lime" id="submit-exam">答案を提出</button></div>
    <div>${questions.map((q,i)=>`<article class="card exam-question"><span class="eyebrow">問 ${i+1} · ${q.unitTitle} · ${q.tag}</span><h3>${q.prompt}</h3><p lang="${q.mode==="translate"?"ja":"de"}">${esc(q.source)}</p>${q.mode==="choice"?`<select class="answer-input" data-exam-answer="${q.id}"><option value="">選択してください</option>${q.options.map(x=>`<option>${esc(x)}</option>`).join("")}</select>`:`<textarea class="answer-area" data-exam-answer="${q.id}" lang="${q.mode==="de2jp"?"ja":"de"}" spellcheck="false"></textarea>`}</article>`).join("")}</div>
  </div>`;
}
function renderExamResult() {
  const result = examState.result, set = examSets.find(s=>s.id===examState.id);
  return `<div class="page">${pageHeader("Result", `模擬試験 0${set.id} 採点結果`, "完全一致だけでなく、主要な別解を登録したルールで採点しています。")}
    <section class="card exam-result"><div class="score-ring" style="--score:${result.score}%"><strong>${result.score}点</strong></div><h2 style="text-align:center">${result.score>=80?"合格圏です":"失点タグを復習しましょう"}</h2><p style="text-align:center;color:var(--muted)">正解 ${result.correct} / ${result.total}問 · 予想失点 ${100-result.score}点</p>${result.wrong.length?`<div class="today-list">${result.wrong.map(item=>`<div class="today-row"><b>${item.no}</b><span><strong>${item.tag}</strong><br><small>${esc(item.answer)}</small></span><small>−${item.loss}点</small></div>`).join("")}</div>`:"<div class='feedback'><strong>全問正解</strong>すばらしい答案です。</div>"}<div class="lesson-actions"><button class="button" id="review-exam">誤答を復習する</button><button class="button ghost" id="exit-exam">試験一覧へ</button></div></section>
  </div>`;
}
function formatTime(seconds) { return `${String(Math.floor(seconds/60)).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`; }

function renderProgress() {
  const totalPct = pct(progress.correct, progress.answered);
  return `<div class="page">${pageHeader("進捗", "学習記録", "各Lektionの正答率と、間違いが多い文法項目を確認できます。")}
    <section class="progress-grid"><div class="card big-stat"><span class="eyebrow" style="color:var(--lime)">Overall mastery</span><strong>${totalPct}%</strong><p>${progress.answered}答案を採点し、${progress.correct}答案が正解でした。</p><div class="lesson-actions"><button class="button lime" data-go="practice">演習を続ける</button></div></div>
      <div class="card mastery-card"><span class="eyebrow">Lektion別</span><h2>Lektion別の正答率</h2><div class="mastery-list">${units.map(unit=>{const s=unitStats(unit.id), v=pct(s.correct,s.answered);return `<div class="risk-row"><div class="label"><span>Lektion ${unit.number}　${unit.title}</span><b>${v}%</b></div><div class="bar"><i style="width:${v}%;background:${unit.accent}"></i></div></div>`}).join("")}</div></div></section>
    <div class="section-heading"><div><span class="eyebrow">Error analysis</span><h2>失点タグ</h2></div></div><section class="split-grid"><div class="card risk-card"><h2>間違えやすい操作</h2>${riskBars()}</div><div class="card today-card"><span class="eyebrow">Review queue</span><h2>${progress.review.length}問が復習待ち</h2><p>誤答した問題を解き直し、正解するとキューから外れます。</p><button class="button" id="progress-review" ${progress.review.length?"":"disabled"}>復習を始める</button></div></section>
    <div class="section-heading"><div><span class="eyebrow">Data</span><h2>学習データ</h2></div></div><div class="card filters"><button class="button ghost" id="export-data">記録をJSONで保存</button><button class="button danger" id="reset-data">学習記録をリセット</button><p class="tiny">記録はこのブラウザ内だけに保存されます。</p></div>
  </div>`;
}

function render() {
  clearInterval(examTimer); examTimer = null;
  const main = document.getElementById("main");
  const views = {home:renderHome,learn:renderLearn,practice:renderPractice,verbs:renderVerbs,vocab:renderVocab,vocabquiz:renderVocabQuiz,exam:renderExam,progress:renderProgress};
  main.innerHTML = (views[route()] || renderHome)();
  updateNav(); updateSidebar(); bindCommon();
  if (examState && !examState.result && route()==="exam") startTimer();
  window.scrollTo({top:0, behavior:"smooth"});
}

function bindCommon() {
  document.querySelectorAll("[data-go]").forEach(el=>el.addEventListener("click",()=>go(el.dataset.go)));
  document.querySelectorAll("[data-quick-choice]").forEach(el=>el.addEventListener("click",()=>{practice.unit="all";practice.mode="choice";practice.reviewOnly=false;practice.index=0;practice.selected="";go("practice");}));
  document.querySelectorAll("[data-open-unit]").forEach(el=>{
    const open=()=>go(`learn/${el.dataset.openUnit}`); el.addEventListener("click",open); el.addEventListener("keydown",e=>{if(e.key==="Enter")open();});
  });
  document.querySelectorAll("[data-unit]").forEach(el=>el.addEventListener("click",()=>{selectedUnit=el.dataset.unit;go(`learn/${selectedUnit}`);render();}));
  document.querySelectorAll("[data-practice-unit]").forEach(el=>el.addEventListener("click",()=>{practice.unit=el.dataset.practiceUnit;practice.reviewOnly=false;practice.index=0;go("practice");}));
  document.querySelectorAll("[data-complete-unit]").forEach(el=>el.addEventListener("click",()=>{const id=el.dataset.completeUnit;if(!progress.completed.includes(id))progress.completed.push(id);saveProgress();toast("学習済みに記録しました");render();}));
  if (route()==="practice") bindPractice();
  if (route()==="verbs") bindVerbs();
  if (route()==="vocab") bindVocab();
  if (route()==="vocabquiz") bindVocabQuiz();
  if (route()==="exam") bindExam();
  if (route()==="progress") bindProgress();
}

function bindPractice() {
  const unitSelect=document.getElementById("practice-unit"), modeSelect=document.getElementById("practice-mode");
  unitSelect?.addEventListener("change",()=>{practice.unit=unitSelect.value;practice.reviewOnly=false;practice.index=0;practice.selected="";render();});
  modeSelect?.addEventListener("change",()=>{practice.mode=modeSelect.value;practice.reviewOnly=false;practice.index=0;practice.selected="";render();});
  document.querySelectorAll("[data-set-mode]").forEach(el=>el.addEventListener("click",()=>{practice.mode=el.dataset.setMode;practice.reviewOnly=false;practice.index=0;render();}));
  document.querySelectorAll("[data-choice]").forEach(el=>el.addEventListener("click",()=>{practice.selected=el.dataset.choice;document.querySelectorAll("[data-choice]").forEach(x=>x.classList.toggle("selected",x===el));}));
  document.querySelectorAll("[data-char]").forEach(el=>el.addEventListener("click",()=>{const input=document.getElementById("practice-answer");if(!input)return;const a=input.selectionStart,b=input.selectionEnd;input.value=input.value.slice(0,a)+el.dataset.char+input.value.slice(b);input.focus();input.selectionStart=input.selectionEnd=a+1;}));
  document.getElementById("show-hint")?.addEventListener("click",()=>{const q=practice.pool[practice.index];document.getElementById("practice-feedback").innerHTML=`<div class="feedback"><strong>ヒント</strong>${esc(q.hint)}</div>`;});
  document.getElementById("check-answer")?.addEventListener("click",checkPractice);
  document.getElementById("review-only")?.addEventListener("click",startReview);
}
function checkPractice() {
  const q=practice.pool[practice.index], input=document.getElementById("practice-answer");
  const value=q.mode==="choice"?practice.selected:(input?.value||"");
  if(!value.trim()){toast("答案を入力してください");return;}
  const correct=isCorrect(q,value); recordAnswer(q,correct);
  document.getElementById("practice-feedback").innerHTML=`<div class="feedback ${correct?"":"wrong"}"><strong>${correct?"正解です":"ここを修正しましょう"}</strong>${esc(q.explanation)}<code>${esc(q.answers[0])}</code></div>`;
  const btn=document.getElementById("check-answer");btn.textContent=practice.index+1>=practice.pool.length?"最初から復習する ↻":"次の問題へ →";btn.onclick=()=>{if(practice.reviewOnly&&correct){practice.index=Math.min(practice.index,Math.max(0,progress.review.length-1));}else{practice.index=(practice.index+1)%practice.pool.length;}practice.selected="";render();};
}
function recordAnswer(q, correct) {
  touchDay(); progress.answered++; progress.today++;
  const unit=progress.byUnit[q.unitId]||{answered:0,correct:0};unit.answered++;if(correct){progress.correct++;unit.correct++;progress.review=progress.review.filter(id=>id!==q.id);}else{progress.wrongTags[q.tag]=(progress.wrongTags[q.tag]||0)+1;if(!progress.review.includes(q.id))progress.review.push(q.id);}progress.byUnit[q.unitId]=unit;saveProgress();
}
function startReview(){if(!progress.review.length){toast("復習待ちはありません");return;}practice.reviewOnly=true;practice.unit="all";practice.mode="all";practice.index=0;render();}

function bindVerbs(){
  const search=document.getElementById("verb-search"),aux=document.getElementById("verb-aux");
  const filter=()=>{const term=normalize(search.value);const list=verbs.filter(v=>(aux.value==="all"||v[6].includes(aux.value))&&(!term||normalize(v.join(" ")).includes(term)));document.getElementById("verb-body").innerHTML=verbRows(list);document.getElementById("verb-count").textContent=`${list.length}語`;};
  search?.addEventListener("input",filter);aux?.addEventListener("change",filter);
  document.getElementById("verb-quiz")?.addEventListener("click",()=>{const v=verbs[Math.floor(Math.random()*verbs.length)];const answer=prompt(`${v[0]} の「過去形 → 接続法第2式 → 過去分詞」を / 区切りで入力してください。`);if(answer!==null)toast(normalize(answer)===normalize(`${v[2]} / ${v[3]} / ${v[4]}`)?"正解です":`正解: ${v[2]} / ${v[3]} / ${v[4]}`);});
}
function bindVocab(){
  document.querySelectorAll("[data-vcat]").forEach(el=>el.addEventListener("click",()=>{sessionStorage.setItem("vocab-category",el.dataset.vcat);render();}));
  document.getElementById("vocab-search")?.addEventListener("input",e=>{const active=sessionStorage.getItem("vocab-category")||"all",term=normalize(e.target.value);const list=vocabEntries.filter(v=>(active==="all"||v.category===active)&&normalize(v.word+" "+v.jp).includes(term));document.getElementById("vocab-grid").innerHTML=vocabCards(list);document.getElementById("vocab-count").textContent=`${list.length}語句`;});
}
function bindVocabQuiz(){
  document.querySelector("[data-vq-all]")?.addEventListener("click",()=>{vocabQuiz.categories=vocabQuiz.categories.length===Object.keys(vocab).length?[]:[...Object.keys(vocab)];render();});
  document.querySelectorAll("[data-vq-category]").forEach(el=>el.addEventListener("click",()=>{const cat=el.dataset.vqCategory;vocabQuiz.categories=vocabQuiz.categories.includes(cat)?vocabQuiz.categories.filter(x=>x!==cat):[...vocabQuiz.categories,cat];render();}));
  document.querySelectorAll("[data-vq-direction]").forEach(el=>el.addEventListener("click",()=>{vocabQuiz.direction=el.dataset.vqDirection;render();}));
  document.querySelectorAll("[data-vq-mode]").forEach(el=>el.addEventListener("click",()=>{vocabQuiz.mode=el.dataset.vqMode;render();}));
  document.querySelectorAll("[data-vq-count]").forEach(el=>el.addEventListener("click",()=>{vocabQuiz.count=el.dataset.vqCount;render();}));
  document.getElementById("start-vocab-quiz")?.addEventListener("click",startVocabQuiz);
  document.querySelectorAll("[data-vocab-choice]").forEach(el=>el.addEventListener("click",()=>{
    if(vocabQuiz.answered)return;
    const current=vocabQuiz.questions[vocabQuiz.index], selected=el.dataset.vocabChoice, correct=normalize(selected)===normalize(current.target);
    vocabQuiz.selected=selected;vocabQuiz.answered=true;if(correct)vocabQuiz.correct++;
    vocabQuiz.results.push({entry:current.entry,correct,selected});
    progress.vocabStats.answered++;if(correct)progress.vocabStats.correct++;
    progress.vocabMastery[vocabMasteryKey(current.entry)]=correct;saveProgress();render();
  }));
  document.getElementById("next-vocab-question")?.addEventListener("click",()=>{if(vocabQuiz.index+1>=vocabQuiz.questions.length)vocabQuiz.stage="result";else{vocabQuiz.index++;vocabQuiz.answered=false;vocabQuiz.selected="";}render();});
  document.getElementById("retry-vocab-quiz")?.addEventListener("click",startVocabQuiz);
  document.getElementById("setup-vocab-quiz")?.addEventListener("click",()=>{vocabQuiz.stage="setup";render();});
}

function bindExam(){
  document.querySelectorAll("[data-start-exam]").forEach(el=>el.addEventListener("click",()=>{const id=Number(el.dataset.startExam),set=examSets.find(s=>s.id===id);examState={id,remaining:set.minutes*60,answers:{},result:null};render();}));
  document.getElementById("submit-exam")?.addEventListener("click",()=>submitExam(false));
  document.getElementById("exit-exam")?.addEventListener("click",()=>{examState=null;render();});
  document.getElementById("review-exam")?.addEventListener("click",()=>{const wrong=examState.result.wrong.map(x=>x.id);wrong.forEach(id=>{if(!progress.review.includes(id))progress.review.push(id)});saveProgress();examState=null;go("practice");startReview();});
}
function startTimer(){examTimer=setInterval(()=>{if(!examState||examState.result)return;examState.remaining--;const el=document.getElementById("exam-timer");if(el)el.textContent=formatTime(Math.max(0,examState.remaining));if(examState.remaining<=0)submitExam(true);},1000);}
function submitExam(auto){
  if(!examState)return;clearInterval(examTimer);const set=examSets.find(s=>s.id===examState.id),qs=set.ids.map(id=>allQuestions.find(q=>q.id===id));let correct=0;const wrong=[];const per=Math.round(100/qs.length);
  qs.forEach((q,i)=>{const el=document.querySelector(`[data-exam-answer="${q.id}"]`),value=el?.value||"";if(isCorrect(q,value)){correct++;}else{wrong.push({id:q.id,no:i+1,tag:q.tag,answer:q.answers[0],loss:per});progress.wrongTags[q.tag]=(progress.wrongTags[q.tag]||0)+1;if(!progress.review.includes(q.id))progress.review.push(q.id);}});
  const score=Math.round(correct/qs.length*100);examState.result={score,correct,total:qs.length,wrong};progress.exams.push({set:set.id,score,date:new Date().toISOString()});saveProgress();if(auto)toast("制限時間になったため採点しました");render();
}
function bindProgress(){
  document.getElementById("progress-review")?.addEventListener("click",()=>{go("practice");startReview();});
  document.getElementById("export-data")?.addEventListener("click",()=>{const blob=new Blob([JSON.stringify(progress,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="pruefwerk-learning-record.json";a.click();URL.revokeObjectURL(url);});
  document.getElementById("reset-data")?.addEventListener("click",()=>{if(confirm("学習記録をすべて削除しますか？この操作は取り消せません。")){progress={...defaultProgress,byUnit:{},wrongTags:{},review:[],completed:[],exams:[],vocabStats:{answered:0,correct:0},vocabMastery:{}};saveProgress();render();}});
}

window.addEventListener("hashchange",render);
document.getElementById("quick-start")?.addEventListener("click",()=>go("practice"));
syncToday();saveProgress();render();
if("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
