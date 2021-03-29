(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(266)),i={title:"Le Mod\xe8le Todo"},l={unversionedId:"tutorials/simple-todo-list/3-the-todo-model",id:"tutorials/simple-todo-list/3-the-todo-model",isDocsHomePage:!1,title:"Le Mod\xe8le Todo",description:"Cr\xe9ons votre premier mod\xe8le. La CLI fournit une commande utile pour g\xe9n\xe9rer un nouveau fichier avec un mod\xe8le vide.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/3-the-todo-model.md",slug:"/tutorials/simple-todo-list/3-the-todo-model",permalink:"/fr/docs/tutorials/simple-todo-list/3-the-todo-model",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/3-the-todo-model.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/fr/docs/tutorials/simple-todo-list/2-introduction"},next:{title:"Le Script Shell create-todo",permalink:"/fr/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo"}},u=[],s={toc:u};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Cr\xe9ons votre premier mod\xe8le. La CLI fournit une commande utile pour g\xe9n\xe9rer un nouveau fichier avec un mod\xe8le vide."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"foal generate entity todo\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"FoalTS utilise ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://typeorm.io"}),"TypeORM"),", un ",Object(a.b)("em",{parentName:"p"},"Object-Relational Mapper")," complet, pour communiquer avec la (les) base(s) de donn\xe9es. Dans TypeORM, les mod\xe8les simples sont appel\xe9s ",Object(a.b)("em",{parentName:"p"},"entit\xe9s")," et sont des classes d\xe9cor\xe9es avec le d\xe9corateur ",Object(a.b)("inlineCode",{parentName:"p"},"Entity"),".")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Chaque nouveau projet dans FoalTS utilise une base de donn\xe9es ",Object(a.b)("inlineCode",{parentName:"p"},"SQLite")," car elle ne n\xe9cessite aucune installation suppl\xe9mentaire. Mais TypeORM prend en charge de nombreuses autres bases de donn\xe9es. Nous garderons celle-ci dans ce tutoriel pour plus de simplicit\xe9.")),Object(a.b)("p",null,"Ouvrez le fichier ",Object(a.b)("inlineCode",{parentName:"p"},"todo.entity.ts")," dans le r\xe9pertoire ",Object(a.b)("inlineCode",{parentName:"p"},"src/app/entities")," et ajoutez une colonne ",Object(a.b)("inlineCode",{parentName:"p"},"text"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class Todo extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  text: string;\n\n}\n\n")),Object(a.b)("p",null,"Cette classe est la repr\xe9sentation de la table SQL ",Object(a.b)("inlineCode",{parentName:"p"},"todo"),". Actuellement, cette table n'existe pas dans la base de donn\xe9es. Vous allez devoir la cr\xe9er."),Object(a.b)("p",null,"Vous pouvez le faire manuellement, en utilisant un logiciel de base de donn\xe9es par exemple, ou utiliser les migrations, une fa\xe7on programmatique de mettre \xe0 jour un sch\xe9ma de base de donn\xe9es. L'avantage de l'utilisation des migrations est que vous pouvez cr\xe9er, mettre \xe0 jour et supprimer vos tables directement \xe0 partir de la d\xe9finition de vos entit\xe9s. Elles permettent \xe9galement de s'assurer que tous vos environnements (prod, dev) et vos co-d\xe9veloppeurs ont les m\xeames d\xe9finitions de tables."),Object(a.b)("p",null,"Voyons comment les utiliser."),Object(a.b)("p",null,"Ex\xe9cutez d","\u2019","abord la commande suivante pour g\xe9n\xe9rer votre fichier de migration. TypeORM va comparer votre sch\xe9ma de base de donn\xe9es actuel avec la d\xe9finition de vos entit\xe9s et g\xe9n\xe9rer les requ\xeates SQL appropri\xe9es."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run makemigrations\n")),Object(a.b)("p",null,"Un nouveau fichier appara\xeet dans le r\xe9pertoire ",Object(a.b)("inlineCode",{parentName:"p"},"src/migrations/"),". Ouvrez-le."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import {MigrationInterface, QueryRunner} from "typeorm";\n\nexport class migration1562755564200 implements MigrationInterface {\n\n    public async up(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`CREATE TABLE "todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL)`, undefined);\n        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`, undefined);\n    }\n\n    public async down(queryRunner: QueryRunner): Promise<void> {\n        await queryRunner.query(`DROP TABLE "user"`, undefined);\n        await queryRunner.query(`DROP TABLE "todo"`, undefined);\n    }\n\n}\n\n')),Object(a.b)("p",null,"La m\xe9thode ",Object(a.b)("inlineCode",{parentName:"p"},"up")," contient toutes les requ\xeates SQL qui seront ex\xe9cut\xe9es pendant la migration."),Object(a.b)("p",null,"Ex\xe9cutez ensuite la migration."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run migrations\n")),Object(a.b)("p",null,"TypeORM examine toutes les migrations qui ont \xe9t\xe9 ex\xe9cut\xe9es pr\xe9c\xe9demment (aucune dans ce cas) et ex\xe9cute les nouvelles."),Object(a.b)("p",null,"Votre base de donn\xe9es (",Object(a.b)("inlineCode",{parentName:"p"},"db.sqlite3"),") contient maintenant une nouvelle table nomm\xe9e ",Object(a.b)("inlineCode",{parentName:"p"},"todo")," :"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"+------------+-----------+-------------------------------------+\n|                             todo                             |\n+------------+-----------+-------------------------------------+\n| id         | integer   | PRIMARY KEY AUTO_INCREMENT NOT NULL |\n| text       | varchar   | NOT NULL                            |\n+------------+-----------+-------------------------------------+\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Vous pouvez \xe9galement utiliser l'option ",Object(a.b)("inlineCode",{parentName:"p"},"synchronize")," dans votre fichier de configuration ",Object(a.b)("inlineCode",{parentName:"p"},"config/default.json"),". Lorsque cette option est d\xe9finie sur ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", le sch\xe9ma de la base de donn\xe9es est automatiquement cr\xe9\xe9 \xe0 partir de la d\xe9finition des entit\xe9s \xe0 chaque lancement de l'application. Vous n'avez pas besoin de migrations dans ce cas. Cependant, bien que ce comportement puisse \xeatre utile pendant le d\xe9bogage et le d\xe9veloppement, il n'est pas adapt\xe9 \xe0 un environnement de production (vous pourriez perdre des donn\xe9es de production).")))}c.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(b,l(l({ref:t},s),{},{components:n})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);