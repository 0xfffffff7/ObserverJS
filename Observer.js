var Observable = {


	// イベントタイプリスト.
	subscribers: {},


	// イベント購読.
	subscribe: function (fn, type){

		if(typeof this.subscribers[type] === "undefined"){
			this.subscribers[type] = [];
		}

		// Regist Callback Method.
		this.subscribers[type].push(fn);
	},


	// イベントタイプ別に登録されたコールバックメソッドのリスト.
	getSubscription: function(type){
		if(typeof this.subscribers[type] === "undefined"){
			return [];
		}else{
			return this.subscribers[type];
		}
	},


	// 購読解除.
	unsubscribe: function(fn, type){

		// Get Subscriber
		functions = this.getSubscription(type);

		var i, max = functions.length;
		for(i =0; i < max; i += 1){
			if(functions[i] === fn){
				functions.splice(i, 1);
			}
		}
	},


	// イベント発火.
	ignition: function(type){

		functions = this.getSubscription(type);

		var i, max = functions.length;
		for(i =0; i < max; i += 1){
			functions[i].apply(this, arguments);
		}
	},


	// あるオブジェクトをオブザーバーへ昇格させる
	toObservable: function(eventor){

		eventor.subscribers = [];
		eventor.ignition = function(){};

		var i;

		// 全てのメンバを拡張してコールバックを追加する.
		for(i in eventor){

			if(eventor.hasOwnProperty(i) && typeof eventor[i] === "function" && i !=='ignition'){

				// オーバーライド.
				// 即時関数で包括することでその時点のメモリをキャプチャする
				eventor[i] = (function(){

					var originalFunc = eventor[i];
					var originalFuncName = i;

					// 実行するメソッドを定義したメソッド.
					return  function(){
	
						// オリジナルを呼び、イベントを発火する.
						// イベントのコールバックの引数には次のものを渡す
						// 0 -> オリジナルのメソッド
						// 1 -> オリジナルメソッドのargumentsリスト
						// 2 -> オリジナルメソッドの実行結果
						eventor.ignition(originalFuncName, arguments, originalFunc.apply(this, arguments));
					};
				})();
			}
		}

		// オブザーバーの機能を全て継承させる.(ただしこのメソッド自身は除外)
		for(i in Observable){
			if(Observable.hasOwnProperty(i) && typeof Observable[i] === "function" && i !== 'toObservable'){
				eventor[i] = Observable[i];
			}
		}
	}
};

