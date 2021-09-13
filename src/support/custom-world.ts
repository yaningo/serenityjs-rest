import { setWorldConstructor, World } from '@cucumber/cucumber'

class CustomWorld extends World {
   

    constructor(options) {
        // needed so `attach`, `log` and `parameters` are properly set
        super(options)
    }

   
}

setWorldConstructor(CustomWorld)