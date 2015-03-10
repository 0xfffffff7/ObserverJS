var Observable = {


	// �C�x���g�^�C�v.
	subscribers: {},


	// �C�x���g�w��.
	subscribe: function (fn, type){

		if(typeof this.subscribers[type] === "undefined"){
			this.subscribers[type] = [];
		}

		// Regist Callback Method.
		this.subscribers[type].push(fn);
	},


	// �C�x���g�^�C�v�ʂɓo�^���ꂽ�R�[���o�b�N���\�b�h�̃��X�g.
	getSubscription: function(type){
		if(typeof this.subscribers[type] === "undefined"){
			return [];
		}else{
			return this.subscribers[type];
		}
	},


	// �w�ǉ���.
	unsubscribe: function(fn, type){

		// Get Subscriber
		functions = getSubscription(type);

		var i, max = functions.length;
		for(i =0; i < max; i += 1){
			if(functions[i] === fn){
				functions.splice(i, 1);
			}
		}
	},


	// �C�x���g����.
	ignition: function(type){

		functions = this.getSubscription(type);

		var i, max = functions.length;
		for(i =0; i < max; i += 1){
			functions[i]();
		}
	},


	// ����I�u�W�F�N�g���I�u�U�[�o�[�֏��i������
	toObservable: function(eventor){

		eventor.subscribers = [];
		eventor.ignition = function(){};

		var i;

		// �S�Ẵ����o���g�����ăR�[���o�b�N��ǉ�����.
		for(i in eventor){

			if(eventor.hasOwnProperty(i) && typeof eventor[i] === "function" && i !=='ignition'){

				// �I�[�o�[���C�h.
				eventor[i] = (function(){

					var originalFunc = eventor[i];
					var originalFuncName = i;

					return  function(){

						// �I���W�i�����Ă�.
						originalFunc.apply(this, arguments);
	
						// �C�x���g�𔭉΂���.
						eventor.ignition(originalFuncName);
					};
				})();
			}
		}

		// �I�u�U�[�o�[�̋@�\��S�Čp��������.(���������̃��\�b�h���g�͏��O)
		for(i in Observable){
			if(Observable.hasOwnProperty(i) && typeof Observable[i] === "function" && i !== 'toObservable'){
				eventor[i] = Observable[i];
			}
		}
	}
};

