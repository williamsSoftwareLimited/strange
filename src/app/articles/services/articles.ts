export const menuItems = [
  { id: 1, name: "SOLID", description: "a decription about solid" },
  { id: 2, name: "Coupling", description: "a decription about Article" },
  { id: 3, name: "Telling", description: "a decription about Telling" },
  { id: 4, name: "Alll", description: "a decription about Alll" },
  { id: 5, name: "About Me!!", description: "a decription about About Me" },
];

export const articles = [
  { id: 1,
    heading: "SOLID",
    intro: "",
    paragraphs: [ {
        header: "Single responsibility",
        para: `The single responsibility principle[Robert C. Martin] describes a way of developing your software, specifically in the object orientated world, what a module should do or 'who the module should effect'.
          If we follow the separation of concerns[Dijkstra], which essentially means to break a class or module into 'what it concerns', then the next issue is what do we mean by concerns? Robert C. Martin brings in the notion of the principle being about people.
          In the highly modular, large and unbelievably complex software of today at no other time has this principle become so important. I could not put it better than the following from Robert C. Martin:
          You want to isolate your modules from the complexities of the organization as a whole, and design your systems such that each module is responsible (responds to) the needs of just that one business function.
          This is the reason we do not put SQL in JSPs. This is the reason we do not generate HTML in the modules that compute results.
          Gather together the things that change for the same reasons. Separate those things that change for different reasons.`
      },
      {
        header: "Open/closed",
        para: `This principle originally comes from Bertrand Meyer who stated: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification... this now seems a little outdated with the undertanding being that a module should be open for expanding (having new properties, functions...) but closed when management had 'signed off' and the module could no longer be altered.
          This seems a little counter-intuitive and is the restrictive Waterfall method.
          Robert C. Martin argues : You should be able to extend the behavior of a system without having to modify that system.
          He, also, argues that the many coding authors write pluggins for Minecraft, Visual Studio, Eclipse etc and that they have proved that it is possible to write code that can follow the open/closed principle.
          A beautiful example, by Robert C. Martin which shows the modern approach, which is to abstract any definites so as to ensure they can be altered without changing any of the existing code.
          Therefore, when your team lead says to refactor (then it's too late!) and when you refactor create an abstraction for your current requirements with 'an eye for the future' and ensuring that you could add to you abstraction without changing any of the existing code.`
        },
        {
          header: "Liskov substitution",
          para: `The Liskov substitution principle	is defined as:
            If S is a declared subtype of T, objects of type S should behave as objects of type T are expected to behave, if they are treated as objects of type T.
            The Liskov substitution principle takes a little time to understand but in essence a function or method of a module should not do something unexpected.
            For example: if a base module with an Add function was implemented without throwing an exception, then all the clients of the base module don't expect an expection to be thrown. But, if I decide it's good practice to throw an expection in my implementation, then I've broken the Liskov principle and the existing clients won't know about my 'perfect' implementation and will not have catered for the exception. The results disasterous the application will break somewhere else and in a large application the trouble-shooting of the problem could take a lot of resources and time. The 'fix' may cause other problems as the developers don't know where the actual problem lies and may refactor existing code, which, well, has now also broken the open/closed closed principle!`
        },
        {
          header: "Interface segregation",
          para: `The interface segregation principle is simply:
            Clients should not be forced to depend on methods that they do not use.[Robert C. Martin]
            I'm as guilty as any developer of writing 'fat interfaces' and it's sometimes not easy to concoct an interface that doesn't become non-cohesive. Martin Fowler brings in the notion of the RoleInterface which quite succintly solves the problem but requires writing interfaces for every role. Robert C. Martin requires multiple inheritence or the use of the Adapter pattern which can turn out quite ugly.
            This is one of the most obvious of the SOLID design principles but seems, the hardest to achieve, with no really solution apart from (I suppose) try to keep you interfaces relevant (to the role) and as small as possible.`
        },
        {
          header: "Dependency injection",
          para: ` The final principle, dependency injection has implications structurally from the open/closed and Liskov substition principles.
            From Robert C. Martin ...The structure [open/closed and Liskov substition] that results from rigorous use of these principles can be generalized into a principle all by itself. I call it 'The Dependency Inversion Principle'...
            The principle is an effort to prevent 'Bad Design', which are:

              Rigidity: The inabilty to change the system.
              Fragility: When a change is made, the system breaks in unexpected places.
              Immobility: Repeatablity of any part of the application isn't possible without disentangling a mess of code.

          To help prevent 'Bad Design' dependency injection was conceived and is defined as:

              High level modules should not depend upon low level modules. Both should depend upon abstractions.
              Abstractions should not depend upon details. Details should depend on abstractions.

          Robert C. Martin continues in his paper to decribe the reason for the name dependency inversion, it's because Dependency is transistive and we ultimately want the higher level not to be dependent on the lower level and to use a method be it constructor, properties etc to abstract away the lower layer so that it can be changed in the future and as long as the open/closed and Liskov substition principles haven't been violated then the system generally will not be of 'Bad Design'. `
        }
    ],
    conclusion: `After writing this, I realised the HTML, Javascript and PHP that produce this page violate SOLID. It would take effort to correct.
      Sometimes, I find myself in overwhelming pressure from customers to finish a project as quickly as possible. They have no care for what patterns, principles or methods I use, they want they're software system up-and-running as soon as possible. These days it's so easy to copy (ctrl C) and paste (ctrl V) and refactor. I've even been told by some large high-tech banks to copy and paste someones code into whatever I'm working on. Sometimes I argue, that it violates SOLID which is one of the questions they asked me to land this contract but they look at me non-plussed and instruct me to 'get on with it' (I've even been threatened!).
      The long and the short of it is, that if customers want good, scalable and stable software then they have to agree to use SOLID and the inherit extra resources and time it takes.`
  },
  { id: 2, heading: "Article",
  intro: `Coupling is the measure of interaction between modules and should be kept to the minimum possible.
    One of the modern problems with dependency injection (or inversion of control) and all the libraries that can be used, is that a class has more than what it needs injected, as all it's dependencies are resolved, this tempts the programmer to use parts of the dependencies, this then accidentally increases the coupling.
    With this in mind, lets proceed to the categories of coupling generally accepted and find a solution to all our development problems.
      Content coupling (worst)
      Common coupling
      External coupling
      Control coupling
      Stamp coupling
      Data coupling(best)
  `,
  paragraphs: [
    { header: `Content`,
      para: `Content coupling is when the code of a module uses the code of another module.
        In C# the use of the dreaded static modifier makes this totally possible and I've seen this type of coupling, in a few notable tech companies and when I've pointed it out they've looked at me in disbelief that anything bad can happen with this type of coupling.
        So lets show what happens with a simple example:
        We mistakenly read the specs and produce this static method in our utilities class:
        public static string Red(string colour) {
            if (colour == "red") return "Yes it's read";
            return "No never read";
        }
        The project continues full steam ahead and this static method is used all over the project, in hundreds of places!
        One example is:
        class TestContent {
            public void doSomething() {
            string testColour = "Blue";
            Console.WriteLine(utilities.Red(testColour));
            estColour = "red";
            Console.WriteLine(utilities.Red(testColour));
            }
        }
        Lets reiterate this has been used from our Common namespace in multiple solutions.
        A developer looks closer at the code and realises it means, 'have you read it?' (read?).
        Requiring this functionality, and reading the spec., he changes the class to ...static string Read(string book)....
        The project compiles and works but when everyone else compiles they're code breaks and everyone starts shouting.
        I know this convoluted example isn't perfect but even a subtle change could break everyones projects.
        'Isn't it the same even if it was a class', yes, but even cleverer fixes have been done, and the essence really is to design code that has the very minimum coupling.` },
    { para: "number 2" },
    { para: "number 3" },
  ],
    conclusion: "Happy as they know it" },
  { id: 3, heading: "Telling", intro: "Welcome to Telling shit", paragraphs: [ { para: "number 1" }, { para: "number 2" }, { para: "number 3" }, { para: "number 4" }, { para: "number 5" } ], conclusion: "Happy as they know it" },
  { id: 4, heading: "Alll", intro: "Welcome to Alll shit", paragraphs: [ { para: "number 1" } ], conclusion: "Happy as they know it" },
  { id: 5, heading: "About Me!!", intro: "Welcome to About Me!! shit", paragraphs: [ { para: "number 1" } ], conclusion: "Happy as they know it" },
]
