/* Additional question bank: every Lektion has at least 20 questions in each of 6 formats. */
globalThis.EXPANDED_QUESTIONS = (() => {
  const out = [];
  let serial = 1;
  const titles = {
    perfect: "過去・現在完了", zu: "zu不定詞・es", reflexive: "再帰表現・比較",
    passive: "受動", relative: "関係詞", subjunctive: "接続法"
  };
  const addText = (unitId, mode, tag, prompt, items) => items.forEach(([source, answer, hint, explanation, alternatives = []]) => out.push({
    id: `x${String(serial++).padStart(3, "0")}`, unitId, unitTitle: titles[unitId], mode, tag, prompt, source,
    answers: [answer, ...alternatives], hint, explanation
  }));
  const addChoice = (unitId, tag, items) => items.forEach(([source, answer, options, hint, explanation]) => out.push({
    id: `x${String(serial++).padStart(3, "0")}`, unitId, unitTitle: titles[unitId], mode: "choice", tag,
    prompt: "正しいものを選んでください。", source, answers: [answer], options, hint, explanation
  }));

  // Lektion 7: 過去・現在完了
  addChoice("perfect", "過去・完了", [
    ["besuchen の過去分詞", "besucht", ["gebesucht", "besucht", "besuchen", "besuchte"], "be-で始まる非分離動詞です。", "非分離動詞にはge-を付けません。"],
    ["Wir ___ nach Berlin gefahren.", "sind", ["haben", "sind", "werden", "hatten"], "fahrenは場所の移動です。", "移動を表すfahrenはseinと完了形を作ります。"],
    ["sein の3人称単数過去形", "war", ["ist", "war", "wurde", "hatte"], "seinの過去基本形を思い出してください。", "sein → war → gewesen。"],
    ["anrufen の過去分詞", "angerufen", ["geanruft", "angeruft", "angerufen", "anrufen"], "分離動詞です。", "an + ge + rufenでangerufenです。"],
    ["正しい現在完了形", "Sie hat lange gearbeitet.", ["Sie ist lange gearbeitet.", "Sie hat lange gearbeitet.", "Sie hat lange gearbeiten.", "Sie lange gearbeitet hat."], "arbeitenはhaben支配です。", "hatを第2位、gearbeitetを文末に置きます。"]
  ]);
  addText("perfect", "fill", "過去形", "空所に適切な形を入れてください。", [
    ["Gestern ___ ich sehr früh nach Hause. (gehen)", "ging", "物語の過去を表す1人称単数です。", "gehenの過去形はgingです。"],
    ["Früher ___ wir in Sapporo. (wohnen)", "wohnten", "規則動詞の複数過去です。", "wohnen → wohnten。"],
    ["Er ___ gestern keine Zeit. (haben)", "hatte", "habenの過去形です。", "3人称単数はhatteです。"],
    ["Ihr ___ damals noch Studenten. (sein)", "wart", "主語はihrです。", "seinのihrに対する過去形はwartです。"],
    ["Der Zug ___ um acht Uhr an. (kommen)", "kam", "ankommenではなく、ここではkommenの過去形を入れます。", "kommen → kam。"]
  ]);
  addText("perfect", "transform", "現在完了", "現在完了形に書き換えてください。", [
    ["Ich kaufe ein Wörterbuch.", "Ich habe ein Wörterbuch gekauft.", "kaufenはhaben支配です。", "habeとgekauftで枠を作ります。"],
    ["Sie kommt spät nach Hause.", "Sie ist spät nach Hause gekommen.", "kommenは移動です。", "ist gekommenを使います。"],
    ["Wir lernen zwei Stunden Deutsch.", "Wir haben zwei Stunden Deutsch gelernt.", "lernenは規則動詞です。", "lernen → gelernt。"],
    ["Er steht um sechs Uhr auf.", "Er ist um sechs Uhr aufgestanden.", "aufstehenは分離動詞です。", "過去分詞はaufgestandenです。"],
    ["Du besuchst deine Tante.", "Du hast deine Tante besucht.", "besuchenにge-は付きません。", "hast besuchtで現在完了を作ります。"]
  ]);
  addText("perfect", "order", "語順", "語句を並べて文を完成させてください。", [
    ["gestern / ich / einen Film / sehen", "Ich habe gestern einen Film gesehen.", "助動詞habenを補い、過去分詞を文末へ。", "habe … gesehenの枠構造です。"],
    ["nach Otaru / wir / mit dem Zug / fahren", "Wir sind mit dem Zug nach Otaru gefahren.", "fahrenはsein支配です。", "sind … gefahrenの枠構造です。"],
    ["um sieben Uhr / der Unterricht / anfangen", "Der Unterricht hat um sieben Uhr angefangen.", "anfangenは分離動詞です。", "hat … angefangenとなります。"],
    ["noch nie / sie / in Deutschland / sein", "Sie ist noch nie in Deutschland gewesen.", "seinの過去分詞はgewesenです。", "ist … gewesenを使います。"],
    ["seine Hausaufgaben / er / schon / machen", "Er hat seine Hausaufgaben schon gemacht.", "gemachtを文末へ。", "hat … gemachtの順です。"]
  ]);
  addText("perfect", "translate", "和文独訳", "ドイツ語に訳してください。", [
    ["私は昨日その本を読みました。", "Ich habe gestern das Buch gelesen.", "lesenの過去分詞はgelesenです。", "habe … gelesenを使います。"],
    ["彼女はベルリンに行きました。", "Sie ist nach Berlin gefahren.", "場所の移動なのでsein支配です。", "ist … gefahrenとなります。"],
    ["君はいつ起きたの？", "Wann bist du aufgestanden?", "aufstehenの現在完了を使います。", "疑問詞の後にbist、過去分詞は文末です。"],
    ["私たちは2週間京都に滞在しました。", "Wir sind zwei Wochen in Kyoto geblieben.", "bleibenはsein支配です。", "sind … gebliebenを使います。"],
    ["彼は何度も私に電話しました。", "Er hat mich mehrmals angerufen.", "anrufenは4格目的語を取ります。", "hat … angerufenの枠を作ります。"]
  ]);
  addText("perfect", "de2jp", "独文和訳", "日本語に訳してください。", [
    ["Ich habe gestern lange gearbeitet.", "私は昨日長時間働きました。", "現在完了ですが、日本語では自然な過去で訳します。", "昨日の仕事について述べています。"],
    ["Wann seid ihr nach Deutschland gefahren?", "君たちはいつドイツに行ったのですか。", "seidの主語はihrです。", "ihrは複数の「君たち」です。"],
    ["Er ist Arzt geworden.", "彼は医者になりました。", "werdenは「〜になる」です。", "状態変化の完了を表しています。"],
    ["Wir waren damals noch Studenten.", "私たちは当時まだ学生でした。", "warenはseinの複数過去です。", "damalsは「当時」です。"],
    ["Sie hat ihre Freundin mehrmals angerufen.", "彼女は友人に何度も電話しました。", "anrufenは「電話をかける」です。", "mehrmalsは「何度も」です。"]
  ]);

  // Lektion 8: zu不定詞・es
  addChoice("zu", "zu不定詞・es", [
    ["正しい形: mitkommen", "mitzukommen", ["zu mitkommen", "mitzukommen", "mitkommen zu", "gemitkommen"], "分離動詞です。", "mit + zu + kommenとなります。"],
    ["「〜するために」を表す接続", "um ... zu", ["ohne ... zu", "statt ... zu", "um ... zu", "dass ... zu"], "目的を表します。", "同じ主語の目的表現はum ... zuです。"],
    ["___ gibt hier einen Bahnhof.", "Es", ["Man", "Das", "Es", "Er"], "「〜がある」の決まり文句です。", "Es gibt + 4格です。"],
    ["Dieses Buch ist leicht ___.", "zu lesen", ["lesen", "gelesen", "zu lesen", "zu gelesen"], "sein + zu不定詞です。", "「読みやすい」はist leicht zu lesenです。"],
    ["天候の正しい文", "Heute schneit es.", ["Heute es schneit.", "Heute schneit es.", "Heute ist schneien.", "Es heute Schnee."], "定動詞は第2位です。", "Heute schneit es. が正しい語順です。"]
  ]);
  addText("zu", "fill", "zu・es", "空所に適切な語を入れてください。", [
    ["Ich habe keine Lust, heute ___ arbeiten.", "zu", "不定詞arbeitenの直前です。", "zu arbeitenとなります。"],
    ["Er fährt nach Deutschland, ___ Deutsch zu lernen.", "um", "目的を表す表現です。", "um ... zuを使います。"],
    ["___ regnet seit gestern.", "Es", "天候表現の形式主語です。", "Es regnet. となります。"],
    ["Wie geht ___ Ihnen?", "es", "決まった非人称表現です。", "Wie geht es Ihnen? です。"],
    ["Vergiss nicht, die Tür ___. (abschließen)", "abzuschließen", "分離動詞にzuを入れます。", "ab + zu + schließenです。"]
  ]);
  addText("zu", "transform", "節の書換え", "zu不定詞を使って書き換えてください。", [
    ["Ich hoffe, dass ich die Prüfung bestehe.", "Ich hoffe, die Prüfung zu bestehen.", "主文と従属節の主語が同じです。", "dass節をzu不定詞句にできます。"],
    ["Er fährt nach Berlin, damit er Deutsch lernt.", "Er fährt nach Berlin, um Deutsch zu lernen.", "目的を表します。", "damit節をum ... zuにします。"],
    ["Es freut mich, dass ich Sie treffe.", "Es freut mich, Sie zu treffen.", "treffenの直前にzuを置きます。", "主語が文脈上同じなので書換え可能です。"],
    ["Du musst heute noch arbeiten.", "Du hast heute noch zu arbeiten.", "義務をhaben + zuで表します。", "hast ... zu arbeitenとなります。"],
    ["Man kann diese Aufgabe leicht lösen.", "Diese Aufgabe ist leicht zu lösen.", "可能をsein + zuで表します。", "ist leicht zu lösenとなります。"]
  ]);
  addText("zu", "order", "語順", "語句を並べて文を完成させてください。", [
    ["es / schwer / ist / Deutsch / zu lernen", "Es ist schwer, Deutsch zu lernen.", "esを文頭、zu不定詞句を後ろへ。", "コンマで区切ります。"],
    ["vor / er / hat / nach Europa / zu reisen", "Er hat vor, nach Europa zu reisen.", "vorhabenの内容をzu不定詞で続けます。", "hat vorとzu reisenを離して置きます。"],
    ["ohne / sie / zu sagen / ging / etwas", "Sie ging, ohne etwas zu sagen.", "ohne ... zuを一まとまりにします。", "「何も言わずに」の語順です。"],
    ["wir / früh / aufstehen / um / den Zug / nehmen", "Wir stehen früh auf, um den Zug zu nehmen.", "目的句はum ... zuです。", "主文と目的句をコンマで分けます。"],
    ["gibt / in der Nähe / es / eine Bank", "Gibt es in der Nähe eine Bank?", "疑問文なので定動詞を先頭へ。", "Gibt es ...? の語順です。"]
  ]);
  addText("zu", "translate", "和文独訳", "ドイツ語に訳してください。", [
    ["私は今日まだ勉強しなければなりません。", "Ich habe heute noch zu lernen.", "haben + zuで義務を表します。", "habe ... zu lernenです。"],
    ["彼はドイツ語を学ぶためドイツへ行きます。", "Er fährt nach Deutschland, um Deutsch zu lernen.", "同じ主語の目的表現です。", "um ... zuを使います。"],
    ["ここには駐車場がありますか。", "Gibt es hier einen Parkplatz?", "es gibt + 4格です。", "疑問文はGibt es ...?です。"],
    ["今日は雪が降っています。", "Heute schneit es.", "天候動詞schneienを使います。", "定動詞schneitが第2位です。"],
    ["その本は読みやすい。", "Das Buch ist leicht zu lesen.", "sein + zu不定詞です。", "ist leicht zu lesenで可能を表します。"]
  ]);
  addText("zu", "de2jp", "独文和訳", "日本語に訳してください。", [
    ["Ich habe vor, nächstes Jahr nach Deutschland zu reisen.", "私は来年ドイツへ旅行するつもりです。", "vorhabenは「〜するつもりだ」です。", "zu不定詞句が計画の内容です。"],
    ["Er ging, ohne ein Wort zu sagen.", "彼は一言も言わずに行きました。", "ohne ... zuは「〜せずに」です。", "ein Wortは「一言」です。"],
    ["Es freut mich, Sie hier zu treffen.", "ここであなたにお会いできてうれしいです。", "Es freut michは「私はうれしい」です。", "zu treffenが喜びの内容です。"],
    ["Gibt es hier in der Nähe eine Apotheke?", "この近くに薬局はありますか。", "es gibtは存在を表します。", "in der Näheは「近くに」です。"],
    ["Dieses Problem ist nicht leicht zu lösen.", "この問題を解くのは簡単ではありません。", "sein + zuは可能を表します。", "nicht leichtは「簡単ではない」です。"]
  ]);

  // Lektion 9: 再帰表現・比較
  addChoice("reflexive", "再帰・比較", [
    ["Wir freuen ___ auf die Ferien.", "uns", ["sich", "euch", "uns", "ihnen"], "主語はwirです。", "wirの再帰代名詞はunsです。"],
    ["viel の比較級", "mehr", ["vieler", "mehr", "besser", "meist"], "不規則変化です。", "viel → mehr → meist。"],
    ["hoch の比較級", "höher", ["hocher", "höher", "höchst", "mehr hoch"], "語幹母音と綴りが変わります。", "hoch → höherです。"],
    ["最上級: gut", "am besten", ["am gutesten", "am besseren", "am besten", "der guter"], "不規則変化です。", "gut → besser → am besten。"],
    ["Ich interessiere mich ___ Musik.", "für", ["an", "auf", "für", "mit"], "再帰動詞と前置詞を一組で覚えます。", "sich interessieren fürです。"]
  ]);
  addText("reflexive", "fill", "再帰・比較", "空所に適切な形を入れてください。", [
    ["Er erinnert ___ an seine Kindheit.", "sich", "主語はerです。", "3人称の再帰代名詞はsichです。"],
    ["Ich wasche ___ das Gesicht.", "mir", "das Gesichtが4格目的語です。", "再帰代名詞は3格mirです。"],
    ["Der Fuji ist ___ als die Zugspitze. (hoch)", "höher", "alsと一緒に比較級を使います。", "hochの比較級はhöherです。"],
    ["Peter läuft in der Klasse am ___. (schnell)", "schnellsten", "am + 最上級です。", "am schnellstenとなります。"],
    ["Heute ist es ___ als gestern. (warm)", "wärmer", "比較級ではaがäになります。", "warm → wärmerです。"]
  ]);
  addText("reflexive", "transform", "比較・人称", "指示に従って書き換えてください。", [
    ["Ich interessiere mich für Musik.（主語をwirに）", "Wir interessieren uns für Musik.", "ich/michをwir/unsにします。", "動詞も複数形に変えます。"],
    ["Thomas ist alt. Michael ist älter.（alsで1文に）", "Michael ist älter als Thomas.", "比較級 + alsを使います。", "比較される基準をalsの後ろへ置きます。"],
    ["Kein Schüler ist so fleißig wie Peter.（最上級に）", "Peter ist der fleißigste Schüler.", "定冠詞付きの最上級です。", "der fleißigste Schülerとなります。"],
    ["Du freust dich auf die Reise.（主語をSieに）", "Sie freuen sich auf die Reise.", "丁寧形Sieの再帰代名詞はsichです。", "動詞はfreuenです。"],
    ["Der Rhein ist lang. Die Donau ist länger.（alsで1文に）", "Die Donau ist länger als der Rhein.", "länger alsを使います。", "主語をDonauにします。"]
  ]);
  addText("reflexive", "order", "語順", "語句を並べて文を完成させてください。", [
    ["ich / mich / für / interessiere / deutsche Musik", "Ich interessiere mich für deutsche Musik.", "sich interessieren fürの語順です。", "再帰代名詞は定動詞の後ろです。"],
    ["freuen / wir / auf / uns / die Ferien", "Wir freuen uns auf die Ferien.", "wirに対応する再帰代名詞はunsです。", "auf + 4格を続けます。"],
    ["größer / Berlin / ist / als / Sapporo", "Berlin ist größer als Sapporo.", "比較級 + alsです。", "定動詞istを第2位に置きます。"],
    ["am liebsten / sie / Jazz / hört", "Sie hört Jazz am liebsten.", "am liebstenは文末に置けます。", "「最も好んで聴く」の文です。"],
    ["der höchste / Deutschland / Berg / in / ist / die Zugspitze", "Die Zugspitze ist der höchste Berg in Deutschland.", "最上級は名詞Bergを修飾します。", "der höchste Bergのまとまりを作ります。"]
  ]);
  addText("reflexive", "translate", "和文独訳", "ドイツ語に訳してください。", [
    ["私は音楽に興味があります。", "Ich interessiere mich für Musik.", "sich interessieren fürを使います。", "ichに対応する再帰代名詞はmichです。"],
    ["私たちは休暇を楽しみにしています。", "Wir freuen uns auf die Ferien.", "sich freuen aufです。", "wirに対応する再帰代名詞はunsです。"],
    ["富士山はその山より高い。", "Der Fuji ist höher als der Berg.", "hochの比較級を使います。", "höher alsです。"],
    ["この公園は春が一番美しい。", "Dieser Park ist im Frühling am schönsten.", "同じ公園を季節で比較します。", "am schönstenを使います。"],
    ["君は子供時代を覚えていますか。", "Erinnerst du dich an deine Kindheit?", "sich erinnern anを使います。", "duに対応する再帰代名詞はdichです。"]
  ]);
  addText("reflexive", "de2jp", "独文和訳", "日本語に訳してください。", [
    ["Interessierst du dich für Sport?", "君はスポーツに興味がありますか。", "sich interessieren fürです。", "疑問文として訳します。"],
    ["Sie freut sich auf die Winterferien.", "彼女は冬休みを楽しみにしています。", "sich freuen aufは「楽しみにする」です。", "sieはここでは彼女です。"],
    ["Er ist um einen Kopf größer als ich.", "彼は私より頭一つ分背が高いです。", "um einen Kopfは差を表します。", "größer als ichが比較です。"],
    ["Dieser Park ist im Frühling am schönsten.", "この公園は春が最も美しいです。", "am schönstenは叙述的最上級です。", "季節による比較です。"],
    ["Ich habe heute kein Geld bei mir.", "私は今日お金を持ち合わせていません。", "bei sich habenは「持ち合わせる」です。", "mirはichに対応します。"]
  ]);

  // Lektion 10: 受動
  addChoice("passive", "受動", [
    ["現在の動作受動", "werden + 過去分詞", ["sein + 過去分詞", "haben + 不定詞", "werden + 過去分詞", "sein + zu不定詞"], "動作の進行を表します。", "動作受動はwerden + 過去分詞です。"],
    ["Die Tür ___ geöffnet.（状態）", "ist", ["wird", "ist", "hat", "wurde"], "結果として開いている状態です。", "状態受動はseinを使います。"],
    ["正しい非人称受動", "Hier wird getanzt.", ["Hier werden getanzt.", "Hier wird getanzt.", "Hier ist tanzen.", "Es hier getanzt wird."], "形式上3人称単数です。", "主語がなくてもwirdを使います。"],
    ["動作主を表す前置詞", "von + 3格", ["von + 3格", "durch + 3格", "mit + 4格", "für + 3格"], "人による動作主です。", "一般的な動作主はvon + 3格です。"],
    ["地震など原因・手段を表す", "durch + 4格", ["von + 4格", "durch + 4格", "bei + 3格", "aus + 3格"], "原因・手段を表します。", "durch + 4格を使います。"]
  ]);
  addText("passive", "fill", "受動", "空所に適切な形を入れてください。", [
    ["In Deutschland ___ Deutsch gesprochen.", "wird", "Deutschは単数主語です。", "現在受動なのでwirdです。"],
    ["Die Häuser ___ aus Holz gebaut.", "werden", "Häuserは複数です。", "複数主語なのでwerdenです。"],
    ["Der Student wurde zum Tee ___. (einladen)", "eingeladen", "einladenの過去分詞です。", "分離動詞ですがgeは前つづりの後です。"],
    ["Die Stadt wurde durch das Erdbeben ___. (zerstören)", "zerstört", "zer-で始まる非分離動詞です。", "過去分詞はzerstörtです。"],
    ["Die Fenster ___ seit gestern geschlossen.（状態）", "sind", "Fensterは複数です。", "状態受動なのでseinの複数sindです。"]
  ]);
  addText("passive", "transform", "受動変換", "能動文を受動文にしてください。", [
    ["Man spricht in Österreich Deutsch.", "In Österreich wird Deutsch gesprochen.", "manは受動文で省きます。", "Deutschを主語にしてwird gesprochenとします。"],
    ["Der Lehrer lobt den Studenten.", "Der Student wird vom Lehrer gelobt.", "4格目的語を主語にします。", "動作主はvom Lehrerです。"],
    ["Das Erdbeben zerstörte die Stadt.", "Die Stadt wurde durch das Erdbeben zerstört.", "過去受動を使います。", "原因はdurch + 4格で表せます。"],
    ["Meine Mutter öffnet das Fenster.", "Das Fenster wird von meiner Mutter geöffnet.", "Fensterを1格主語にします。", "wird ... geöffnetの枠です。"],
    ["Die Studenten lesen viele Bücher.", "Viele Bücher werden von den Studenten gelesen.", "複数主語なのでwerdenです。", "lesenの過去分詞はgelesenです。"]
  ]);
  addText("passive", "order", "語順", "語句を並べて文を完成させてください。", [
    ["in Japan / Japanisch / gesprochen / wird", "In Japan wird Japanisch gesprochen.", "場所を文頭に置けます。", "定動詞wirdは第2位です。"],
    ["von meinem Bruder / vorgeschlagen / der Plan / wurde", "Der Plan wurde von meinem Bruder vorgeschlagen.", "過去受動です。", "wurdeと過去分詞で枠を作ります。"],
    ["heute / hier / gearbeitet / wird", "Hier wird heute gearbeitet.", "非人称受動です。", "文頭がHierなのでesは不要です。"],
    ["geschlossen / die Tür / seit gestern / ist", "Die Tür ist seit gestern geschlossen.", "状態受動です。", "istとgeschlossenを使います。"],
    ["zum Essen / ich / eingeladen / wurde", "Ich wurde zum Essen eingeladen.", "1人称単数の過去受動です。", "wurde ... eingeladenの枠です。"]
  ]);
  addText("passive", "translate", "和文独訳", "ドイツ語に訳してください。", [
    ["ドイツではドイツ語が話されています。", "In Deutschland wird Deutsch gesprochen.", "Deutschは単数です。", "wird gesprochenを使います。"],
    ["この本は多くの学生に読まれています。", "Dieses Buch wird von vielen Studenten gelesen.", "動作主はvon + 3格です。", "wird ... gelesenの枠です。"],
    ["ここでは日曜日も働きます。", "Hier wird auch am Sonntag gearbeitet.", "非人称受動にします。", "Hierを文頭に置くのでesは不要です。"],
    ["窓はいま開けられます。", "Das Fenster wird jetzt geöffnet.", "動作受動です。", "wird geöffnetを使います。"],
    ["窓はいま開いています。", "Das Fenster ist jetzt geöffnet.", "状態受動です。", "ist geöffnetを使います。"]
  ]);
  addText("passive", "de2jp", "独文和訳", "日本語に訳してください。", [
    ["Hanako wird immer gelobt.", "花子はいつも褒められます。", "gelobtはlobenの過去分詞です。", "現在の受動文です。"],
    ["Hier wird auch am Sonntag gearbeitet.", "ここでは日曜日にも仕事が行われます。", "非人称受動です。", "自然な日本語では「日曜日も働きます」でも構いません。", ["ここでは日曜日も働きます。"]],
    ["Die Stadt wurde durch das Erdbeben zerstört.", "その町は地震によって破壊されました。", "durchは原因を表します。", "wurde zerstörtは過去受動です。"],
    ["Die Tür ist seit vorgestern geschlossen.", "ドアは一昨日から閉まっています。", "状態受動です。", "seitは過去から現在までの継続です。"],
    ["Ihm wird von seinen Eltern oft geholfen.", "彼は両親によく助けてもらいます。", "helfenは3格支配です。", "Ihmは受動でも3格のままです。"]
  ]);

  // Lektion 11: 関係詞
  addChoice("relative", "関係詞", [
    ["der Mann, ___ dort steht", "der", ["den", "dem", "der", "dessen"], "関係文の主語です。", "男性1格なのでderです。"],
    ["der Mann, ___ ich sehe", "den", ["der", "den", "dem", "dessen"], "sehenの4格目的語です。", "男性4格なのでdenです。"],
    ["die Frau, mit ___ ich spreche", "der", ["die", "der", "deren", "den"], "mitは3格支配です。", "女性3格なのでderです。"],
    ["das Kind, ___ Vater Arzt ist", "dessen", ["deren", "dessen", "dem", "das"], "「その子の父」という所有です。", "中性2格なのでdessenです。"],
    ["特定の先行詞なしで人を表す", "wer", ["was", "wer", "der", "wo"], "「〜する人」を表します。", "不定関係代名詞werを使います。"]
  ]);
  addText("relative", "fill", "関係格", "空所に関係詞を入れてください。", [
    ["Das ist der Bus, ___ zur Universität fährt.", "der", "Busは男性、関係文の主語です。", "男性1格derです。"],
    ["Das ist der Bus, in ___ du steigen musst.", "den", "方向を表すin + 4格です。", "男性4格denです。"],
    ["Die Studentin, mit ___ ich lerne, kommt aus Berlin.", "der", "mitは3格支配です。", "女性3格derです。"],
    ["Mein Freund, ___ Mutter Lehrerin ist, wohnt hier.", "dessen", "男性先行詞の所有です。", "男性2格dessenです。"],
    ["Alles, ___ er sagt, ist richtig.", "was", "allesを受ける関係詞です。", "allesの後はwasです。"]
  ]);
  addText("relative", "transform", "文結合", "2文を関係文で一つにしてください。", [
    ["Das ist der Student. Er kommt aus Wien.", "Das ist der Student, der aus Wien kommt.", "Studentは男性、関係文の主語です。", "derを使い、動詞kommtを文末へ置きます。"],
    ["Ich kenne den Mann. Du siehst ihn dort.", "Ich kenne den Mann, den du dort siehst.", "Mannは関係文で4格です。", "denを使います。"],
    ["Wir besuchen die Frau. Ihr Sohn studiert Medizin.", "Wir besuchen die Frau, deren Sohn Medizin studiert.", "女性先行詞の所有です。", "deren Sohnには冠詞を付けません。"],
    ["Das ist das Haus. Ich wohne in dem Haus.", "Das ist das Haus, in dem ich wohne.", "inは場所なので3格です。", "中性3格demを使います。"],
    ["Er fährt nach Frankfurt. Dort findet die Messe statt.", "Er fährt nach Frankfurt, wo die Messe stattfindet.", "地名をwoで受けます。", "関係副詞woを使います。"]
  ]);
  addText("relative", "order", "語順", "語句を並べて文を完成させてください。", [
    ["der Bus / zur Uni / fährt / der", "Das ist der Bus, der zur Uni fährt.", "関係文の動詞は文末です。", "derが関係文の主語です。"],
    ["die Tasche / gekauft / ich / habe / die", "Das ist die Tasche, die ich gekauft habe.", "完了助動詞を関係文末に置きます。", "女性4格dieを使います。"],
    ["der Mann / mit / spreche / dem / ich", "Das ist der Mann, mit dem ich spreche.", "mit + 3格です。", "sprecheを文末に置きます。"],
    ["die Frau / deren / Arzt / Mann / ist", "Das ist die Frau, deren Mann Arzt ist.", "derenは所有を表します。", "Mannに冠詞は不要です。"],
    ["wer / Deutsch / lernen / muss / üben / will", "Wer Deutsch lernen will, muss üben.", "wer節の定動詞を文末へ。", "主文のmussは第2位です。"]
  ]);
  addText("relative", "translate", "和文独訳", "ドイツ語に訳してください。", [
    ["これは大学へ行くバスです。", "Das ist der Bus, der zur Universität fährt.", "Busは男性、関係文の主語です。", "derを使います。"],
    ["私が昨日買った本はおもしろい。", "Das Buch, das ich gestern gekauft habe, ist interessant.", "Buchは中性、関係文で4格です。", "dasを使い、habeを関係文末に置きます。"],
    ["私が一緒にテニスをする友人です。", "Das ist der Freund, mit dem ich Tennis spiele.", "mitは3格支配です。", "男性3格demを使います。"],
    ["妻が入院している叔父は一人ですべてをします。", "Mein Onkel, dessen Frau im Krankenhaus liegt, macht alles allein.", "男性先行詞の所有です。", "dessen Frauを使います。"],
    ["最後に笑う者が最もよく笑う。", "Wer zuletzt lacht, lacht am besten.", "特定の先行詞がありません。", "不定関係代名詞werを使います。"]
  ]);
  addText("relative", "de2jp", "独文和訳", "日本語に訳してください。", [
    ["Da kommt der Bus, der zur Uni fährt.", "あそこに大学へ行くバスが来ます。", "derはBusを受ける主語です。", "関係文がBusを説明しています。"],
    ["Das ist der Freund, mit dem ich oft Tennis spiele.", "これは私がよく一緒にテニスをする友人です。", "mit demは「その人と」です。", "関係文内でdemは3格です。"],
    ["Wir besuchen die Frau, deren Sohn in Berlin lebt.", "私たちは息子がベルリンに住んでいる女性を訪ねます。", "derenは女性先行詞の所有です。", "deren Sohnは「その女性の息子」です。"],
    ["Wer Deutsch lernen will, muss viel üben.", "ドイツ語を学びたい人はたくさん練習しなければなりません。", "werは「〜する人」です。", "willとmussの主語は同じ人物です。"],
    ["Das ist alles, was ich weiß.", "これが私の知っているすべてです。", "allesを受ける関係詞はwasです。", "was以下がallesを説明します。"]
  ]);

  // Lektion 12: 接続法
  addChoice("subjunctive", "接続法", [
    ["haben の接続法第2式", "hätte", ["habe", "hatte", "hätte", "habe gehabt"], "ウムラウトが付きます。", "haben → hätteです。"],
    ["kommen の接続法第1式3人称単数", "komme", ["kommt", "kam", "komme", "käme"], "第1式の語尾は-eです。", "er kommeとなります。"],
    ["間接疑問文を導く語", "ob", ["wenn", "ob", "als", "dass zu"], "はい・いいえで答える疑問です。", "決定疑問文の間接話法はobです。"],
    ["過去の非現実: sein支配", "wäre + 過去分詞", ["sei + 不定詞", "wäre + 過去分詞", "würde + 過去形", "ist + 過去分詞"], "過去に実現しなかったことです。", "sein支配ではwäre + 過去分詞です。"],
    ["丁寧な依頼", "Würden Sie mir helfen?", ["Helfen Sie mir!", "Sie helfen mir.", "Würden Sie mir helfen?", "Sie würden geholfen."], "接続法第2式で表現を和らげます。", "Würden Sie ...? が丁寧です。"]
  ]);
  addText("subjunctive", "fill", "接続法", "空所に適切な形を入れてください。", [
    ["Er sagt, er ___ müde. (sein, 第1式)", "sei", "seinの接続法第1式です。", "3人称単数はseiです。"],
    ["Wenn ich Zeit ___, führe ich in die Stadt. (haben)", "hätte", "現在の非現実です。", "habenの第2式はhätteです。"],
    ["Sie sagte, ihre Eltern ___ morgen. (kommen)", "kämen", "複数で第1式が直説法と同形になるため第2式です。", "kommenの第2式複数はkämenです。"],
    ["Wenn er doch hier ___! (sein)", "wäre", "実現困難な願望です。", "seinの第2式はwäreです。"],
    ["Ich ___ gern einen Kaffee. (haben, 丁寧)", "hätte", "控えめな希望です。", "Ich hätte gern ...を使います。"]
  ]);
  addText("subjunctive", "transform", "間接・非現実", "指示に従って書き換えてください。", [
    ["Er sagt: „Ich bin krank.“（間接話法）", "Er sagt, er sei krank.", "ichをerに変えます。", "seinの第1式seiを使います。"],
    ["Sie fragt ihn: „Kommst du mit?“（間接話法）", "Sie fragt ihn, ob er mitkomme.", "決定疑問文はobです。", "duをerに変え、mitkommeを文末へ置きます。"],
    ["Er sagt zu mir: „Komm sofort!“（間接話法）", "Er sagt mir, ich solle sofort kommen.", "命令はsollenで表します。", "ich solle ... kommenとなります。"],
    ["Ich habe keine Zeit. Ich fahre nicht.（非現実の条件文）", "Wenn ich Zeit hätte, würde ich fahren.", "現在の事実に反する仮定です。", "hätteとwürdeを使います。"],
    ["Ich hatte keine Zeit. Ich fuhr nicht.（過去の非現実）", "Wenn ich Zeit gehabt hätte, wäre ich gefahren.", "過去に実現しなかった仮定です。", "gehabt hätte / wäre gefahrenを使います。"]
  ]);
  addText("subjunctive", "order", "語順", "語句を並べて文を完成させてください。", [
    ["er / sagt / müde / sei / er", "Er sagt, er sei müde.", "間接話法では定動詞を文末へ。", "主文と引用内容をコンマで分けます。"],
    ["wenn / hätte / ich / Zeit / käme / ich", "Wenn ich Zeit hätte, käme ich.", "wenn節の定動詞は文末です。", "主文は定動詞kämeから始まります。"],
    ["würden / Sie / mir / bitte / helfen", "Würden Sie mir bitte helfen?", "疑問文なので定動詞を先頭へ。", "würden + 不定詞です。"],
    ["ob / sie / fragte / komme / er", "Sie fragte, ob er komme.", "ob節の定動詞は文末です。", "主語はerです。"],
    ["wäre / doch / er / hier", "Wenn er doch hier wäre!", "願望のwenn文です。", "wäreを文末に置きます。"]
  ]);
  addText("subjunctive", "translate", "和文独訳", "ドイツ語に訳してください。", [
    ["彼は疲れていると言っています。", "Er sagt, er sei müde.", "間接話法です。", "seinの第1式seiを使います。"],
    ["時間があれば町へ行くのに。", "Wenn ich Zeit hätte, würde ich in die Stadt fahren.", "現在の非現実です。", "hätteとwürde ... fahrenを使います。"],
    ["彼がここにいればなあ。", "Wenn er doch hier wäre!", "実現困難な願望です。", "wäreを使います。"],
    ["塩を取っていただけますか。", "Würden Sie mir bitte das Salz reichen?", "丁寧な依頼です。", "Würden Sie ...?を使います。"],
    ["彼女は、彼が一緒に来るか尋ねました。", "Sie fragte, ob er mitkomme.", "決定疑問文の間接話法です。", "obと接続法第1式mitkommeを使います。"]
  ]);
  addText("subjunctive", "de2jp", "独文和訳", "日本語に訳してください。", [
    ["Er sagt, er sei müde.", "彼は疲れていると言っています。", "seiは間接話法の接続法第1式です。", "話者は内容を引用しています。"],
    ["Wenn ich Zeit hätte, würde ich in die Stadt fahren.", "時間があれば町へ行くのですが。", "現在の非現実です。", "実際には時間がない含みがあります。"],
    ["Wenn ich Zeit gehabt hätte, wäre ich gefahren.", "時間があったなら行ったのですが。", "過去の非現実です。", "実際には時間がなく、行かなかったことを表します。"],
    ["Sie sprach, als ob sie alles wüsste.", "彼女はまるですべて知っているかのように話しました。", "als obは「まるで〜のように」です。", "wüssteはwissenの第2式です。"],
    ["Ich hätte eine Bitte an Sie.", "あなたにお願いがあるのですが。", "hätteで表現を丁寧にしています。", "直訳より自然な依頼表現として訳します。"]
  ]);

  /*
   * Fifteen parallel drill sets per lesson. Each set is presented in all six
   * formats. Together with the five hand-authored sets above, this guarantees
   * 20+ questions per format and lesson without loading an external service.
   */
  const parallelDrills = {
    perfect: [
      ["Ich habe heute ein Wörterbuch gekauft.","私は今日辞書を一冊買いました。","gekauft",["gekaufen","kaufte","gegekauft"],"Ich kaufe heute ein Wörterbuch.","現在完了形に書き換えてください。","kaufenの過去分詞はgekauftです。"],
      ["Sie ist um neun Uhr angekommen.","彼女は9時に到着しました。","angekommen",["angekommen ist","geankommen","ankommte"],"Sie kommt um neun Uhr an.","現在完了形に書き換えてください。","ankommenは移動を表し、seinを使います。"],
      ["Wir haben den ganzen Abend gelernt.","私たちは晩じゅう勉強しました。","gelernt",["gelernen","lernte","gelernen haben"],"Wir lernen den ganzen Abend.","現在完了形に書き換えてください。","規則動詞lernenの過去分詞です。"],
      ["Er ist sehr früh eingeschlafen.","彼はとても早く寝入りました。","eingeschlafen",["geeinschlafen","einschlaft","eingeschlaft"],"Er schläft sehr früh ein.","現在完了形に書き換えてください。","状態変化なのでsein支配です。"],
      ["Habt ihr das Museum besucht?","君たちはその博物館を訪れましたか。","besucht",["gebesucht","besuchen","besuchtet"],"Besucht ihr das Museum?","現在完了の疑問文に書き換えてください。","be-で始まる動詞にはge-を付けません。"],
      ["Meine Eltern sind nach Hamburg gefahren.","私の両親はハンブルクへ行きました。","gefahren",["gefährt","fahren","gefahrt"],"Meine Eltern fahren nach Hamburg.","現在完了形に書き換えてください。","場所の移動なのでsein + gefahrenです。"],
      ["Der Unterricht hat um zehn Uhr angefangen.","授業は10時に始まりました。","angefangen",["geanfangen","anfängte","angefangt"],"Der Unterricht fängt um zehn Uhr an.","現在完了形に書き換えてください。","anfangenの過去分詞はangefangenです。"],
      ["Ich habe meine Schlüssel verloren.","私は鍵をなくしました。","verloren",["geverloren","verliert","verlornt"],"Ich verliere meine Schlüssel.","現在完了形に書き換えてください。","verlierenはhaben支配です。"],
      ["Das Kind ist schnell gewachsen.","その子どもはすぐに成長しました。","gewachsen",["gewachst","wachste","gewaschen"],"Das Kind wächst schnell.","現在完了形に書き換えてください。","状態変化のwachsenはseinを使います。"],
      ["Wir haben gestern zusammen gekocht.","私たちは昨日一緒に料理をしました。","gekocht",["gekochen","kochte haben","gekochtt"],"Wir kochen gestern zusammen.","現在完了形に書き換えてください。","kochenは規則動詞です。"],
      ["Bist du schon einmal in Wien gewesen?","君はウィーンに行ったことがありますか。","gewesen",["gesein","war","gewest"],"Bist du schon einmal in Wien?","経験を表す現在完了形に書き換えてください。","seinの過去分詞はgewesenです。"],
      ["Er hat mir eine E-Mail geschrieben.","彼は私にメールを書きました。","geschrieben",["geschreibt","schrieb","geschreibet"],"Er schreibt mir eine E-Mail.","現在完了形に書き換えてください。","schreibenの過去分詞はgeschriebenです。"],
      ["Der Zug ist pünktlich abgefahren.","列車は定刻に出発しました。","abgefahren",["geabfahren","abgefahrt","abfuhr"],"Der Zug fährt pünktlich ab.","現在完了形に書き換えてください。","分離動詞abfahrenはabgefahrenです。"],
      ["Sie hat die Tür zugemacht.","彼女はドアを閉めました。","zugemacht",["gezumacht","zumachen","zumachte"],"Sie macht die Tür zu.","現在完了形に書き換えてください。","zumachenの過去分詞はzugemachtです。"],
      ["Wir sind drei Tage in München geblieben.","私たちはミュンヘンに3日間滞在しました。","geblieben",["gebleibt","bleibte","gebleiben"],"Wir bleiben drei Tage in München.","現在完了形に書き換えてください。","bleibenはseinと完了形を作ります。"]
    ],
    zu: [
      ["Ich versuche, jeden Tag Deutsch zu lernen.","私は毎日ドイツ語を学ぼうとしています。","zu lernen",["lernen zu","gelernt","zu gelernt"],"Ich versuche es. Ich lerne jeden Tag Deutsch.","zu不定詞を使って1文にしてください。","不定詞lernenの直前にzuを置きます。"],
      ["Er geht früh ins Bett, um morgen fit zu sein.","彼は明日元気でいるため早く寝ます。","um",["ohne","statt","dass"],"Er geht früh ins Bett, damit er morgen fit ist.","um ... zuを使って書き換えてください。","同じ主語の目的はum ... zuで表せます。"],
      ["Sie ging weg, ohne sich zu verabschieden.","彼女は別れの挨拶をせず立ち去りました。","ohne",["um","statt","damit"],"Sie ging weg. Sie verabschiedete sich nicht.","ohne ... zuを使って1文にしてください。","否定の付帯状況はohne ... zuです。"],
      ["Es ist wichtig, genug zu schlafen.","十分に眠ることは大切です。","zu schlafen",["schlafen zu","geschlafen","zu geschlafen"],"Genug schlafen ist wichtig.","esを先取り主語にして書き換えてください。","内容を表すzu不定詞句を後ろに置きます。"],
      ["Wir haben heute viel zu tun.","私たちは今日することがたくさんあります。","zu tun",["tun zu","getan","zu getan"],"Wir müssen heute viel tun.","haben + zuを使って書き換えてください。","haben + zu不定詞は必要・義務を表します。"],
      ["Diese Aufgabe ist leicht zu verstehen.","この課題は簡単に理解できます。","zu verstehen",["verstehen zu","verstanden","zu verstanden"],"Man kann diese Aufgabe leicht verstehen.","sein + zuを使って書き換えてください。","sein + zu不定詞で可能を表します。"],
      ["Es gibt hier einen Geldautomaten.","ここにはATMがあります。","gibt",["hat","ist","wird"],"Hier ist ein Geldautomat vorhanden.","es gibtを使って書き換えてください。","存在はes gibt + 4格で表します。"],
      ["Heute regnet es den ganzen Tag.","今日は一日中雨が降っています。","es",["das","er","man"],"Heute regnet der ganze Tag.","形式主語esを使う文に直してください。","天候表現ではesを使います。"],
      ["Vergiss nicht, das Fenster zu schließen.","窓を閉めるのを忘れないでください。","zu schließen",["schließen zu","geschlossen","zu geschlossen"],"Vergiss das Schließen des Fensters nicht.","zu不定詞を使って書き換えてください。","nicht vergessenの内容をzu不定詞で示します。"],
      ["Er hat vor, am Wochenende auszuschlafen.","彼は週末に朝寝するつもりです。","auszuschlafen",["zu ausschlafen","auszuschlaft","ausgeschlafen"],"Er plant, am Wochenende lange zu schlafen.","vorhabenを使って書き換えてください。","分離動詞では前つづりの後にzuを入れます。"],
      ["Sie fährt mit dem Bus, statt ein Taxi zu nehmen.","彼女はタクシーに乗る代わりにバスで行きます。","statt",["um","ohne","damit"],"Sie nimmt kein Taxi, sondern fährt mit dem Bus.","statt ... zuを使って書き換えてください。","代替はstatt ... zuで表します。"],
      ["Es fällt mir schwer, früh aufzustehen.","私には早起きするのが難しいです。","aufzustehen",["zu aufstehen","aufgestanden","aufzusteht"],"Früh aufzustehen ist für mich schwer.","esを先取り主語にして書き換えてください。","auffstehenではなくaufzustehenです。"],
      ["Ich bitte dich, mir zu helfen.","私は君に手伝ってくれるよう頼みます。","zu helfen",["helfen zu","geholfen","zu geholfen"],"Ich bitte dich um deine Hilfe.","zu不定詞を使って書き換えてください。","bittenの内容をzu不定詞で続けます。"],
      ["Es ist verboten, hier zu rauchen.","ここで喫煙することは禁止されています。","zu rauchen",["rauchen zu","geraucht","zu geraucht"],"Man darf hier nicht rauchen.","sein + zu不定詞を用いた表現にしてください。","行為の内容をzu不定詞で示します。"],
      ["Wie geht es deiner Schwester?","君のお姉さん（妹）は元気ですか。","es",["sie","das","ihr"],"Wie befindet sich deine Schwester?","gehenの非人称表現で書き換えてください。","Wie geht es + 3格は体調を尋ねる表現です。"]
    ],
    reflexive: [
      ["Ich freue mich auf das Wochenende.","私は週末を楽しみにしています。","mich",["mir","sich","dich"],"Wir freuen uns auf das Wochenende.","主語をichに変えてください。","ichに対応する4格再帰代名詞はmichです。"],
      ["Du interessierst dich für Geschichte.","君は歴史に興味があります。","dich",["dir","mich","sich"],"Ihr interessiert euch für Geschichte.","主語をduに変えてください。","duの再帰代名詞はdichです。"],
      ["Wir erinnern uns an unsere Schulzeit.","私たちは学生時代を覚えています。","uns",["euch","sich","ihnen"],"Ich erinnere mich an meine Schulzeit.","主語をwirに変えてください。","wirに対応する再帰代名詞はunsです。"],
      ["Sie wäscht sich jeden Morgen.","彼女は毎朝体を洗います。","sich",["ihr","sie","mich"],"Ich wasche mich jeden Morgen.","主語をsieに変えてください。","3人称の再帰代名詞はsichです。"],
      ["Ich putze mir die Zähne.","私は歯を磨きます。","mir",["mich","sich","dir"],"Du putzt dir die Zähne.","主語をichに変えてください。","die Zähneが4格なので再帰代名詞は3格です。"],
      ["Heute ist es kälter als gestern.","今日は昨日より寒いです。","kälter",["kalter","am kältesten","mehr kalt"],"Gestern war es kalt. Heute ist es noch kälter.","alsを使う比較文にしてください。","kaltの比較級はkälterです。"],
      ["Dieses Buch ist interessanter als jenes.","この本はあの本より面白いです。","interessanter",["interessantest","mehr interessant","am interessantesten"],"Jenes Buch ist interessant, aber dieses Buch ist noch interessanter.","alsを使って1文にしてください。","比較級 + alsで差を表します。"],
      ["Anna läuft am schnellsten.","アンナが最も速く走ります。","am schnellsten",["schneller","am schnelleren","am schnellste"],"Niemand läuft schneller als Anna.","最上級を使って書き換えてください。","叙述用法はam + -stenです。"],
      ["Mein Bruder ist so groß wie ich.","兄（弟）は私と同じくらい背が高いです。","so groß wie",["größer als","am größten","mehr groß wie"],"Mein Bruder und ich sind gleich groß.","so ... wieを使って書き換えてください。","同等比較はso + 原級 + wieです。"],
      ["Der Dezember ist der kälteste Monat.","12月は最も寒い月です。","kälteste",["kälter","am kältesten","kalteste"],"Kein Monat ist kälter als der Dezember.","名詞を修飾する最上級に書き換えてください。","定冠詞の後でMonatを修飾します。"],
      ["Er ärgert sich über den Lärm.","彼は騒音に腹を立てています。","sich",["ihm","ihn","mir"],"Ich ärgere mich über den Lärm.","主語をerに変えてください。","sich ärgern überを一組で覚えます。"],
      ["Setzt euch bitte hierhin.","君たちはここに座ってください。","euch",["uns","sich","ihnen"],"Setz dich bitte hierhin.","複数のihrに対する命令にしてください。","ihrの再帰代名詞はeuchです。"],
      ["Sie unterhalten sich über den Film.","彼らはその映画について話しています。","sich",["ihnen","sie","euch"],"Wir unterhalten uns über den Film.","主語をsie（彼ら）に変えてください。","sich unterhalten überを使います。"],
      ["Ich trinke lieber Tee als Kaffee.","私はコーヒーより紅茶のほうが好きです。","lieber",["gerner","am liebsten","besser"],"Ich trinke gern Tee, aber Kaffee nicht so gern.","比較級を使って1文にしてください。","gernの比較級はlieberです。"],
      ["Von allen Fächern mag ich Deutsch am liebsten.","全科目の中で私はドイツ語が一番好きです。","am liebsten",["lieber","am besten","am gernsten"],"Ich mag Deutsch lieber als alle anderen Fächer.","最上級を使って書き換えてください。","gernの最上級はam liebstenです。"]
    ],
    passive: [
      ["Der Brief wird heute geschrieben.","その手紙は今日書かれます。","wird",["ist","hat","werden"],"Man schreibt den Brief heute.","受動文に書き換えてください。","単数主語なのでwirdを使います。"],
      ["Die Pakete werden morgen geliefert.","荷物は明日配達されます。","werden",["wird","sind","haben"],"Man liefert die Pakete morgen.","受動文に書き換えてください。","複数主語なのでwerdenです。"],
      ["Das Haus wurde 1990 gebaut.","その家は1990年に建てられました。","wurde",["war","wird","ist"],"Man baute das Haus 1990.","過去の受動文に書き換えてください。","werdenの過去3人称単数はwurdeです。"],
      ["Die Straße wurde durch den Schnee gesperrt.","その道路は雪によって通行止めになりました。","durch",["von","mit","aus"],"Der Schnee sperrte die Straße.","原因を示す受動文に書き換えてください。","原因・手段はdurch + 4格です。"],
      ["Das Lied wird von einer Studentin gesungen.","その歌は女子学生によって歌われます。","von",["durch","für","aus"],"Eine Studentin singt das Lied.","動作主を示す受動文にしてください。","人の動作主はvon + 3格です。"],
      ["Hier wird nicht geraucht.","ここでは喫煙されません。","wird",["werden","ist","hat"],"Man raucht hier nicht.","非人称受動に書き換えてください。","文頭がHierなら形式主語esは不要です。"],
      ["Dem Patienten wird sofort geholfen.","その患者はすぐに助けてもらいます。","wird",["werden","ist","hat"],"Man hilft dem Patienten sofort.","受動文に書き換えてください。","3格目的語は3格のままです。"],
      ["Die Tür ist seit einer Stunde geschlossen.","ドアは1時間前から閉まっています。","ist",["wird","hat","wurde"],"Jemand hat die Tür geschlossen; jetzt bleibt sie zu.","状態受動で表してください。","結果の状態はsein + 過去分詞です。"],
      ["Das Essen muss vorbereitet werden.","食事は準備されなければなりません。","werden",["worden","wird","sein"],"Man muss das Essen vorbereiten.","話法の助動詞を含む受動文にしてください。","文末は過去分詞 + werdenです。"],
      ["Der Computer kann repariert werden.","そのコンピューターは修理できます。","repariert",["reparieren","gerepariert","reparierte"],"Man kann den Computer reparieren.","受動文に書き換えてください。","話法の助動詞 + 過去分詞 + werdenです。"],
      ["Die Fenster sind schon geöffnet worden.","窓はすでに開けられました。","worden",["geworden","werden","gewurden"],"Man hat die Fenster schon geöffnet.","現在完了の受動文にしてください。","受動の完了ではgewordenではなくwordenです。"],
      ["Es wurde die ganze Nacht getanzt.","一晩中踊られました。","wurde",["wurden","war","ist"],"Man tanzte die ganze Nacht.","esを用いる非人称受動にしてください。","非人称受動は3人称単数です。"],
      ["Die Prüfung wird nächste Woche geschrieben.","試験は来週行われます。","geschrieben",["geschreibt","schreiben","geschriebt"],"Die Studenten schreiben die Prüfung nächste Woche.","受動文に書き換えてください。","4格目的語die Prüfungが主語になります。"],
      ["Der Fehler wurde schnell gefunden.","その誤りはすぐに見つかりました。","gefunden",["gefindet","fand","gefindet worden"],"Jemand fand den Fehler schnell.","過去の受動文にしてください。","findenの過去分詞はgefundenです。"],
      ["In dieser Fabrik werden Autos hergestellt.","この工場では自動車が製造されています。","hergestellt",["geherstellt","herstellen","hergestellen"],"Diese Fabrik stellt Autos her.","受動文に書き換えてください。","herstellenの過去分詞はhergestelltです。"]
    ],
    relative: [
      ["Das ist der Mann, der neben mir wohnt.","こちらが私の隣に住んでいる男性です。","der",["den","dem","dessen"],"Der Mann wohnt neben mir. Das ist der Mann.","関係文を使って1文にしてください。","関係文内で主語なので1格derです。"],
      ["Ich kenne den Studenten, den du suchst.","私は君が探している学生を知っています。","den",["der","dem","dessen"],"Du suchst den Studenten. Ich kenne ihn.","関係文を使って1文にしてください。","関係文内で4格目的語なのでdenです。"],
      ["Die Frau, der ich helfe, ist Lehrerin.","私が手伝っている女性は教師です。","der",["die","denen","deren"],"Ich helfe der Frau. Sie ist Lehrerin.","関係文を使って1文にしてください。","helfenは3格を取るためderです。"],
      ["Das Kind, dessen Vater Arzt ist, heißt Paul.","父親が医師である子どもはパウルといいます。","dessen",["deren","dem","das"],"Der Vater des Kindes ist Arzt. Das Kind heißt Paul.","関係文を使って1文にしてください。","中性・男性の2格関係代名詞はdessenです。"],
      ["Die Studentin, deren Tasche hier liegt, kommt aus Wien.","バッグがここにある女子学生はウィーン出身です。","deren",["dessen","der","die"],"Die Tasche der Studentin liegt hier. Sie kommt aus Wien.","関係文を使って1文にしてください。","女性単数の2格はderenです。"],
      ["Das Buch, das ich gestern gekauft habe, ist spannend.","私が昨日買った本は面白いです。","das",["der","dem","dessen"],"Ich habe das Buch gestern gekauft. Es ist spannend.","関係文を使って1文にしてください。","中性4格はdasです。"],
      ["Die Freunde, mit denen ich reise, sind nett.","私が一緒に旅行する友人たちは親切です。","denen",["die","deren","den"],"Ich reise mit den Freunden. Sie sind nett.","関係文を使って1文にしてください。","mitは3格、複数形はdenenです。"],
      ["Die Stadt, in der er geboren wurde, liegt am Rhein.","彼が生まれた町はライン川沿いにあります。","der",["die","den","deren"],"Er wurde in der Stadt geboren. Sie liegt am Rhein.","関係文を使って1文にしてください。","in + 3格、女性単数なのでderです。"],
      ["Der Zug, auf den wir warten, kommt gleich.","私たちが待っている列車はまもなく来ます。","den",["dem","der","dessen"],"Wir warten auf den Zug. Er kommt gleich.","関係文を使って1文にしてください。","warten auf + 4格なのでdenです。"],
      ["Wer fleißig lernt, besteht die Prüfung.","熱心に勉強する人は試験に合格します。","Wer",["Was","Wen","Wem"],"Jemand lernt fleißig. Er besteht die Prüfung.","不定関係代名詞を使って1文にしてください。","人を受ける不定関係代名詞Werを使います。"],
      ["Was er sagt, stimmt nicht.","彼の言うことは正しくありません。","Was",["Wer","Das","Welches"],"Er sagt etwas. Das stimmt nicht.","不定関係代名詞を使って1文にしてください。","先行詞を含む「〜すること」はwasです。"],
      ["Das ist alles, was ich weiß.","それが私の知っているすべてです。","was",["das","welches","wer"],"Ich weiß das alles. Das ist alles.","関係文を使って1文にしてください。","allesの後では通常wasを使います。"],
      ["Der Kollege, von dem ich spreche, arbeitet in Berlin.","私が話題にしている同僚はベルリンで働いています。","dem",["den","der","dessen"],"Ich spreche von dem Kollegen. Er arbeitet in Berlin.","関係文を使って1文にしてください。","von + 3格なのでdemです。"],
      ["Die Kinder, denen wir Bücher schenken, freuen sich.","私たちが本を贈る子どもたちは喜んでいます。","denen",["deren","die","den"],"Wir schenken den Kindern Bücher. Sie freuen sich.","関係文を使って1文にしてください。","複数3格の関係代名詞はdenenです。"],
      ["Der Lehrer, dessen Unterricht interessant ist, kommt aus Köln.","授業が面白いその先生はケルン出身です。","dessen",["deren","dem","den"],"Der Unterricht des Lehrers ist interessant. Der Lehrer kommt aus Köln.","関係文を使って1文にしてください。","男性単数2格はdessenです。"]
    ],
    subjunctive: [
      ["Er sagt, er sei heute krank.","彼は今日病気だと言っています。","sei",["ist","wäre","war"],"Er sagt: „Ich bin heute krank.“","間接話法に書き換えてください。","seinの接続法第1式3人称単数はseiです。"],
      ["Sie sagt, sie habe keine Zeit.","彼女は時間がないと言っています。","habe",["hat","hätte","hatte"],"Sie sagt: „Ich habe keine Zeit.“","間接話法に書き換えてください。","habenの接続法第1式はhabeです。"],
      ["Paul behauptet, er kenne den Mann nicht.","パウルはその男性を知らないと主張しています。","kenne",["kennt","kannte","kennte"],"Paul behauptet: „Ich kenne den Mann nicht.“","間接話法に書き換えてください。","kennenの接続法第1式3人称単数はkenneです。"],
      ["Sie fragt, ob der Zug pünktlich komme.","彼女は列車が定刻に来るか尋ねます。","komme",["kommt","käme","kam"],"Sie fragt: „Kommt der Zug pünktlich?“","間接疑問文に書き換えてください。","決定疑問文はobで導きます。"],
      ["Er sagt, ich solle sofort anrufen.","彼は私にすぐ電話するよう言っています。","solle",["soll","sollte","würde"],"Er sagt zu mir: „Ruf sofort an!“","命令の間接話法にしてください。","間接命令にはsollenの第1式を使います。"],
      ["Wenn ich mehr Geld hätte, würde ich reisen.","もっとお金があれば旅行するのですが。","hätte",["habe","hatte","haben würde"],"Ich habe nicht genug Geld, deshalb reise ich nicht.","現在の非現実条件文にしてください。","habenの接続法第2式はhätteです。"],
      ["Wenn er hier wäre, könnten wir anfangen.","彼がここにいれば始められるのですが。","wäre",["ist","war","sei"],"Er ist nicht hier, deshalb können wir nicht anfangen.","現在の非現実条件文にしてください。","seinの第2式はwäreです。"],
      ["Ich würde gern in Deutschland studieren.","私はドイツで勉強したいです。","würde",["werde","wurde","worden"],"Ich möchte gern in Deutschland studieren.","würdeを使う丁寧な希望にしてください。","würde + 不定詞で控えめな希望を表します。"],
      ["Könnten Sie das bitte wiederholen?","もう一度言っていただけますか。","Könnten",["Konnten","Können","Kämen"],"Wiederholen Sie das bitte.","より丁寧な依頼にしてください。","könnenの第2式で依頼を和らげます。"],
      ["Ich hätte gern ein Glas Wasser.","水を一杯いただきたいです。","hätte",["habe","hatte","sei"],"Ich möchte ein Glas Wasser.","hätte gernを使って丁寧にしてください。","hätte gernは注文・希望の丁寧表現です。"],
      ["Wenn ich doch fliegen könnte!","飛べたらなあ。","könnte",["kann","konnte","könne"],"Leider kann ich nicht fliegen.","非現実の願望文にしてください。","願望にはwenn + 第2式を使えます。"],
      ["Wenn wir früher losgefahren wären, hätten wir den Zug erreicht.","もっと早く出発していたら列車に間に合ったでしょう。","wären",["sind","seien","würden"],"Wir fuhren nicht früh los und erreichten den Zug nicht.","過去の非現実条件文にしてください。","過去の第2式は過去分詞 + hätte/wäreです。"],
      ["An deiner Stelle würde ich mehr schlafen.","私が君の立場ならもっと寝ます。","würde",["werde","wurde","sei"],"Du solltest mehr schlafen.","An deiner Stelleを使う助言にしてください。","第2式を使うと控えめな助言になります。"],
      ["Er tut so, als ob er alles wüsste.","彼はまるですべて知っているかのように振る舞います。","wüsste",["weiß","wisse","wusste"],"Er weiß nicht alles, aber er tut so.","als obを使って1文にしてください。","wissenの第2式はwüssteです。"],
      ["Es wäre schön, wenn du kommen könntest.","君が来られたらうれしいのですが。","wäre",["ist","sei","war"],"Ich wünsche mir, dass du kommst.","接続法第2式で控えめに表してください。","wäreとkönntestで現実から距離を置きます。"]
    ]
  };

  const mixWords = sentence => {
    const words = sentence.replace(/[?.!,]/g, "").split(/\s+/);
    const odds = words.filter((_, i) => i % 2).reverse();
    const evens = words.filter((_, i) => i % 2).reverse();
    return [...odds, ...evens].join(" / ");
  };
  Object.entries(parallelDrills).forEach(([unitId, rows]) => rows.forEach((row, i) => {
    const [de, jp, blank, distractors, transformSource, transformPrompt, hint] = row;
    const cloze = de.replace(blank, "___");
    const explanation = `${hint} 正解は「${blank}」です。`;
    addChoice(unitId, "反復練習", [[cloze, blank, [blank, ...distractors], hint, explanation]]);
    addText(unitId, "fill", "反復練習", "空所に適切な形を入れてください。", [[cloze, blank, hint, explanation]]);
    addText(unitId, "transform", "文変換", transformPrompt, [[transformSource, de, hint, `${hint} 文全体は「${de}」です。`]]);
    addText(unitId, "order", "語順", "語句を並べて文を完成させてください。", [[mixWords(de), de, "定動詞の位置と文末の要素を確認してください。", `正しい語順は「${de}」です。`]]);
    addText(unitId, "translate", "和文独訳", "ドイツ語に訳してください。", [[jp, de, hint, `${hint} 模範解答は「${de}」です。`]]);
    addText(unitId, "de2jp", "独文和訳", "日本語に訳してください。", [[de, jp, hint, `文法事項を確認し、自然な日本語では「${jp}」となります。`]]);
  }));

  return out;
})();
