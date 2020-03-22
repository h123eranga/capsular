import { Route } from "./route";
import { ClassName } from "./enums";

export abstract class CapsularApp {
    routes: Route[];
}

export function startApp(appInstance: CapsularApp) {

    // read the main-app from html content
    let mainApp = document.getElementById("main-app");
    if (mainApp && mainApp !== undefined) {
        /*
         *  Create an instance of the App which has registered all routes
         *  app.ts file should contains the class App extends CapsularApp
         */
        //let app = new AppInstance();
        let app = appInstance;

        // store the current route Ex: /home, /prfoile, /store/products
        //let currentRoute = "";


        window.onload = function () {
            mapRoutes(app, mainApp);
        };


        // iterate through all the available routes in App
        // app.routes.forEach(route => {
        //     if (currentRoute === route.url) {

        //         let elementsUsedVariables: any[] = [];

        //         // create a new component from the routes list
        //         let newComponent = new route.component();

        //         // store the list of component variables to inject in templates
        //         let componentVariableNames: string[] = Object.keys(newComponent);
        //         console.log(componentVariableNames);

        //         // create a new component with the name of the new component
        //         // TODO read the directive name is going to be added by a property
        //         let componentApp = document.createElement(route.name.toLowerCase());
        //         console.log(newComponent, newComponent.name);

        //         // exectue the build method in new component to get the template
        //         let widgetContent = newComponent.build();
        //         console.log("---------------------------");
        //         console.log(widgetContent);
        //         console.log("---------------------------");

        //         // The place where starts injecting widget content returned from new component
        //         // build method to render the component template and inject it into new component
        //         if (widgetContent) {
        //             readFormat(newComponent, widgetContent, componentApp, elementsUsedVariables);
        //         }

        //         mainApp.appendChild(componentApp);
        //         console.log("all elements", elementsUsedVariables);
        //         window.onload = function start() {
        //             watchVariableChanges(newComponent, elementsUsedVariables);
        //         }
        //         // for (let i = 0; i < elementsUsedVariables.length; i++) {
        //         //     var element = document.querySelector("[" + elementsUsedVariables[i].attributeName + "]");
        //         //     element.firstChild.data = "updated"; // not the recomended way
        //         // }
        //         // var node = document.createElement("div");
        //         // var textnode = document.createTextNode("This is a test");
        //         // node.appendChild(textnode);
        //         // mainApp.appendChild(node);
        //     }
        // });
    }
}

function mapRoutes(app: CapsularApp, mainApp: any) {
    // TODO app should be started after this
    console.log(window.location.pathname, app.routes);
    let currentRoute = window.location.pathname;
    let routes = app.routes;
    let route = routes.find(route => "/" + route.url === currentRoute);
    if (route) {
        let elementsUsedVariables: any[] = [];

        // create a new component from the routes list
        let newComponent = new route.component();

        // store the list of component variables to inject in templates
        let componentVariableNames: string[] = Object.keys(newComponent);
        console.log(componentVariableNames);

        // create a new component with the name of the new component
        // TODO read the directive name is going to be added by a property
        let componentApp = document.createElement(route.name.toLowerCase());
        console.log(newComponent, newComponent.name);

        // exectue the build method in new component to get the template
        let widgetContent = newComponent.build();
        console.log("---------------------------");
        console.log(widgetContent);
        console.log("---------------------------");

        // The place where starts injecting widget content returned from new component
        // build method to render the component template and inject it into new component
        if (widgetContent) {
            readFormat(newComponent, widgetContent, componentApp, elementsUsedVariables);
        }

        mainApp.appendChild(componentApp);
        console.log("all elements", elementsUsedVariables);
        window.onload = function start() {
            watchVariableChanges(newComponent, elementsUsedVariables);
        }
        // for (let i = 0; i < elementsUsedVariables.length; i++) {
        //     var element = document.querySelector("[" + elementsUsedVariables[i].attributeName + "]");
        //     element.firstChild.data = "updated"; // not the recomended way
        // }
        // var node = document.createElement("div");
        // var textnode = document.createTextNode("This is a test");
        // node.appendChild(textnode);
        // mainApp.appendChild(node);
    }
}

// the method process all the widget content
// and making dom elements and injecting
// it into passed mainApp element
// which renders on the page as template
function readFormat(newComponent, widgetContent, componentApp, elementsUsedVariables) {
    console.log("new component", newComponent, "widgetContent", widgetContent, "component app", componentApp);
    console.log("-----------------------------------------------------------------");

    let rootElement;
    let node;

    // create attirbute to add into the generated dom elements
    let elementsUsedVariablesAttr = document.createAttribute("lib_id_" + getRandomId(8));
    elementsUsedVariablesAttr.value = "";

    // IMPORTANT this is a serious issue
    // TODO what if children added first and then source?
    // process the native widgets
    if (widgetContent["isNative"]) {
        //for (let key of Object.keys(widgetContent)) {
        // check for the source which defines the native HTML element
        if (widgetContent["source"]) {
            rootElement = widgetContent["source"];
            console.log("source", rootElement);

            // create a DOM element by type based on the passed widget source Ex: div, h1, h2, button
            node = document.createElement(rootElement);
            // TODO add attributes only for variable appears
            // add the attirbute only the variables needed to be updated
            node.setAttributeNode(elementsUsedVariablesAttr);
        }
        if (widgetContent["id"]) {
            console.log("element id", "id", widgetContent["id"]);
            node.id = widgetContent["id"];
        }
        if (widgetContent["className"]) {
            console.log("class name", "className", widgetContent["className"]);
            node.classList.add(widgetContent["className"]);
        }
        // check for the content needs to be added inside the DOM element
        if (widgetContent["content"]) {
            if (widgetContent["content"]) {
                // node should be available to inject the content
                console.log("node", node);

                // check for variable names added inside the content
                console.log("found variable name", widgetContent["content"].match(/^@[a-zA-Z]+$/));
                console.log("elementContent before", widgetContent["content"]);

                if (node && widgetContent["content"]) {
                    // convert the content into a string
                    // TODO what if people add html content inside this
                    let elementContent = widgetContent["content"].toString();

                    // store list of variables added inside the content
                    let variableNames = elementContent.match(/\{{.*?\}}/g);
                    if (variableNames) {

                        // list down all variables
                        console.log(">>>>>>>>>>>", elementContent.match(/\{{.*?\}}/g));

                        // use the object of details of the variable added inside the content
                        // add the initial content without changing anything for future use
                        // while updating variables there should be a way to access
                        // old content and replace the values in it
                        let elementsUsedVariable = {
                            content: elementContent,
                            variablesData: [],
                            attributeName: elementsUsedVariablesAttr.name
                        };

                        // iterate through all the variables
                        for (let i = 0; i < variableNames.length; i++) {
                            var variableName = variableNames[i].replace("{{", "").replace("}}", "");
                            console.log(variableName, elementsUsedVariable, elementContent);

                            // prepare the DOM element content to be added
                            // read the variables from the passed component
                            elementContent = elementContent.replace(new RegExp('\\{\\{' + variableName + '\\}\\}', 'gm'), newComponent[variableName]);

                            // keep the value and name of variables of the current component
                            // to update it while executing actions
                            elementsUsedVariable.variablesData.push({
                                name: variableName,
                                value: newComponent[variableName],
                            });
                            console.log(elementContent);
                        }
                        elementsUsedVariables.push(elementsUsedVariable);
                    }

                    // element content after processing the variables
                    console.log("elementContent after", elementContent);

                    // create a text element with the content and inject it into
                    // DOM element created by using the source Ex: div, h1, h2, button
                    let textnode = document.createTextNode(elementContent);
                    node.appendChild(textnode);
                }
                console.log("node", node);
                console.log("content", widgetContent["content"]);
            }
        }
        // reading all the styles added for the widget
        if (widgetContent["style"]) {
            // TODO
            // add css inline if there is no class defined
            if (widgetContent["style"] && widgetContent["style"]["styles"]) {
                console.log("styles found", widgetContent["style"], widgetContent["style"]["styles"]);
                var styles = widgetContent["style"]["styles"];
                var cssText = "";
                console.log(styles);
                for (let cssProperty of Object.keys(styles)) {
                    console.log("css", cssProperty, styles[cssProperty]);
                    var actualCssProperty = (cssProperty.replace(/([A-Z])/g, "-$1").toLowerCase()).toString();
                    console.log(actualCssProperty);
                    cssText += actualCssProperty + ":" + styles[cssProperty] + ";";
                }
                node.style.cssText = cssText;
            }
        }
        // read all the events mapped with the widget
        if (widgetContent["events"]) {
            console.log("events", widgetContent["events"]);
            let events = widgetContent["events"];
            if (events) {
                // iterate through all the events
                for (let j of Object.keys(events)) {
                    console.log(events[j]);
                    // event name added in the object
                    let eventName = events[j]["name"];
                    // event function added in the object
                    let eventFunctionName = events[j]["functionName"];
                    console.log(node, eventName, eventFunctionName);
                    //node.addEventListener(eventName, newComponent.eventFunctionName);
                    console.log(newComponent, typeof (eventFunctionName));
                    // add the name of event and function
                    node.addEventListener(eventName, eventFunctionName);
                }
            }
        }
        // read for all the children widgets added under the main widget
        if (widgetContent["children"]) {
            console.log("children", widgetContent["children"]);
            let childrenContent = widgetContent["children"];
            if (childrenContent) {
                // iterate through all the children widgets and add each one by one
                for (let j of Object.keys(childrenContent)) {
                    console.log("started reading children");
                    if (childrenContent[j]) {
                        // node is the parent widget
                        readFormat(newComponent, childrenContent[j], node, elementsUsedVariables);
                    }
                }
            }
        }
        // TODO temporary solution
        if(widgetContent["href"]){
            console.log("href found");
            // stop refreshing page
            node.href = widgetContent["href"];
        }
        //}
    } else {
        console.log("boom non natie");
        // TODO all these implementations should be uniue to those element classes
        if (widgetContent["source"]) {
            node = document.createElement(widgetContent["source"]);
            node.classList.add(widgetContent["className"]);
            if (widgetContent["source"] == ClassName.Row) {

            }
            if (widgetContent["source"] == ClassName.Column) {

            }
            if (widgetContent["source"] == ClassName.List) {
                console.log(widgetContent, widgetContent.items, widgetContent.builder);
                for (let i = 0; i < widgetContent.items.length; i++) {
                    console.log(widgetContent.builder(widgetContent.items, i));
                    readFormat(newComponent, widgetContent.builder(widgetContent.items, i), node ? node : componentApp, elementsUsedVariables);
                }
            }
            if (widgetContent["source"] == ClassName.Card) {
                console.log(widgetContent, widgetContent.build());
                readFormat(newComponent, widgetContent.build(), node ? node : componentApp, elementsUsedVariables);
            }
            if (widgetContent["source"] == ClassName.NavBar) {
                readFormat(newComponent, widgetContent.build(), node ? node : componentApp, elementsUsedVariables);
            }
        }
        //widgetContent = widgetContent.build();
    }
    console.log("rootElement", rootElement);
    console.log("node", node);
    console.log("mainApp", componentApp);
    // add finally the node after processing all into the component app element which has created with component name
    if (node) {
        componentApp.appendChild(node);
    }
    //return htmlContent += rootElement ? "</" + rootElement + ">" : "";
}

function isVaraiableChangable(variableName) {
    return true;
}

function watchVariableChanges(component: any, usedVariables: Array<any>) {
    window.setInterval(() => {
        console.log("watch changes", usedVariables);
        for (let i = 0; i < usedVariables.length; i++) {
            console.log("i", i);
            var currentData = usedVariables[i].content;
            for (let j = 0; j < usedVariables[i].variablesData.length; j++) {
                console.log("j", j);
                var variable = usedVariables[i].variablesData[j];
                var variableName = variable.name;
                console.log("variable", variable, component.name, component.age);
                if (detectVariableChange(variable.value, component[variableName])) {
                    console.log("variable has been changed", usedVariables[i].attributeName);
                    usedVariables[i].variablesData[j].value = component[variableName];
                    var attributeName = "[" + usedVariables[i].attributeName + "]";
                    var element = document.querySelector(attributeName);
                    //this {{name}} and {{age}}
                    console.log(element, currentData, variableName, usedVariables[i].variablesData[j].value);
                    //currentData.replace("{{name", "test");
                    currentData = currentData.replace(new RegExp('\\{\\{' + variableName + '\\}\\}', 'gm'), usedVariables[i].variablesData[j].value);
                    console.log(element, currentData);
                    //element.firstChild.data = usedVariables[i].variablesData[j].value; // prepare the entire text and do the validation
                    element.firstChild.data = currentData;
                }
            }
        }
    }, 2000);
}

function detectVariableChange(oldValue, newValue) {
    if (oldValue != newValue) {
        return true;
    }
    return false;
}

function getRandomId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function isVariableExists(variableNamesList: Array<string>, variableName: string) {
    return variableNamesList.findIndex(name => name === variableName);
}

// call the App constructor
// inject the content inside main-app

function moveForward() {
    console.log(window.location.pathname);
}

function moveBackword() {

}

function getCurrentRoute() {

}