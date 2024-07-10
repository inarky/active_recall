export class C17ar {

  static html = `
    <fieldset>
      <legend>場所記憶法とactive recall</legend>
      <div>
        <ol>
          <li>
            場所のリストを記憶していること
          </li>
          <li>
            特定の場所と記憶対象を使って、エピソードを作成できること
          </li>
          <li>
            1と2によって、何も道具（カード、ノート、パソコン、スマホ）を使わなくても、さらには、目を瞑っていても、記憶テスト（アクティブ・リコール）ができること
          </li>
        </ol>
      </div>
    </fieldset>
    <fieldset>
      <legend>場所記憶法</legend>
      <select>
        <option value="山手線" selected>山手線</option>
        <option value="総武線">総武線</option>
      </select>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">場所</th>
              <th scope="col">キーワード</th>
            </tr>
          </thead>
          <tbody class="リスト">
          </tbody>
        </table>
      </div>
    </fieldset>
  `;

  static 総武線 = [
    '船橋',     '東船橋', '津田沼', '幕張本郷', '幕張',
    '新検見川', '稲毛',   '西千葉', '千葉',
  ];

  static 山手線 = [
    '東京',
    '有楽町',
    '新橋',
    '浜松町',
    '田町',
    '高輪ゲートウェイ',
    '品川',
    '大崎',
    '五反田',
    '目黒',
    '恵比寿',
    '渋谷',
    '原宿',
    '代々木',
    '新宿',
    '新大久保',
    '高田馬場',
    '目白',
    '池袋',
    '大塚',
    '巣鴨',
    '駒込',
    '田端',
    '西日暮里',
    '日暮里',
    '鶯谷',
    '上野',
    '御徒町',
    '秋葉原',
    '神田',
  ];

  constructor( div_main )
  {
    this.div = document.querySelector( div_main );
    this.div.insertAdjacentHTML( 'afterbegin', C17ar.html );
    const select = this.div.querySelector( 'select' );
    this.make_list();
    select.addEventListener( 'input', e => this.make_list( e ) );
  }

  make_list( e )
  {
    const select = this.div.querySelector( 'select' );
    const 場所リスト = this.constructor[ select.value ];
    const tbody = this.div.querySelector( 'tbody.リスト' );
    tbody.innerHTML = '';
    for ( const 駅名 of 場所リスト )
    {
      const th = document.createElement( 'th' );
      th.scope = 'row';
      th.insertAdjacentHTML( 'afterbegin', 駅名 );
      const td = document.createElement( 'td' );
      td.setAttribute( 'contenteditable', 'plaintext-only' );
      td.setAttribute( 'placeholder', '思い出すためのキーを入力' );
      const tr = document.createElement( 'tr' );
      tr.appendChild( th );
      tr.appendChild( td );
      tbody.appendChild( tr );
    }
  }
}
