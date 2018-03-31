(function (global, $) {
    
    // 'new' an object
    var SayHello = function (firstName, lastName, language) {
        return new SayHello.init(firstName, lastName, language);
    };
    
    // hidden within the scope of IIFE and never directly accesible
    var supportedLanguages = ['en', 'es', 'ja', 'fr', 'it', 'de', 'el', 'ru', 'pt', 'zh'];
    
    // informal greetings
    greetings = {
        en: 'Hello',
        es: 'Hola',
        ja: 'こんにちは',
        fr: 'Bonjour',
        it: 'Ciao',
        de: 'Hallo',
        el: 'Χαίρετε',
        ru: 'Здравствуйте',
        pt: 'Olá',
        zh: '你好'
    };
    
    // formal greetings
    formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        ja: 'ご挨拶',
        fr: 'Salutations',
        it: 'Saluti',
        de: 'Schöne Grüße',
        el: 'Χαιρετίσματα',
        ru: 'Приветствую',
        pt: 'saudações',
        zh: '問候'
    };
    
    // logger messages
    var logMessages = {
        en: 'logged in',
        es: 'inició sesión',
        ja: 'はログインしました',
        fr: "s'est connecté",
        it: "effettuato l'accesso",
        de: 'hat sich eingeloggt',
        el: 'συνδεθεί',
        ru: 'сессия началась',
        pt: 'logou',
        zh: '會議開始'
    };
    
    // prototype holds methods (to save memory space)
    SayHello.prototype = {
        
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLanguages' within the closure
            if (supportedLanguages.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
            
        },
        
        validatedLanguage: function (lang) {
            if (supportedLanguages.indexOf(lang) === -1) {
                this.log(lang + ' is not supported. Supported languages are [' + supportedLanguages.toString() + ']');
                // invalid language, falling back to default language
                return supportedLanguages[0];
            } else {
                return lang;
            }
        },
        
        // retrieve messages from object by referring to properties using [] syntax
        greeting: function () {
            return greetings[this.validatedLanguage(this.language)] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function () {
            return formalGreetings[this.validatedLanguage(this.language)] + ', ' + this.fullName();    
        },
        
        // chainable methods return their own containing object
        greet: function (formal) {
            var msg;
            
            // If undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            // logs the greeting in the console.log if available
            this.log(msg);
            
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        log: function (msg) {
            if(console) {
                console.log(msg || logMessages[this.language] + ': ' + this.fullName() );
            }
            
            // make chainable
            return this;
        },
        
        setLanguage: function (lang) {
            this.language = this.validatedLanguage(lang);
            
            // make chainable
            return this;
        },
        
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();   
            }
            else {
                msg = this.greeting();   
            }
            
            // inject the message in the chosen place in the DOM
            $(selector).html(msg);
            
            // make chainable
            return this;
        }
        
        
    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    SayHello.init = function (firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
    };
    
     // trick borrowed from jQuery so we don't have to use the 'new' keyword
    SayHello.init.prototype = SayHello.prototype;
    
    // attach our 'SayHello' to the global object, and provide a shorthand 'SH$' for ease our poor fingers
    global.SayHello = global.SH$ = SayHello;
    
}(window, jQuery));