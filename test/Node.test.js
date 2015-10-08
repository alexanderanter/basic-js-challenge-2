/**
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var expect = require("chai").expect;

describe("Node", function() {
    var Node;
    var node;

    describe("Type", function() {
        it("Node should be defined", function() {
            Node = require("./../src/Node");
        });
    });

    describe("Prototype", function() {
        describe("toString method", function() {
            it("should be defined as an own property", function() {
                expect(Node.prototype.hasOwnProperty("toString")).to.equal(true);
            });

            it("new Node(\"html\") should return \"html\"", function() {
                node = new Node("html");
                expect(node.toString()).to.equal("html");
            });

            it("new Node(\"div\", 3) should return \"\\t\\t\\tdiv\"", function() {
                node = new Node("div", 3);
                expect(node.toString()).to.equal("\t\t\tdiv");
            });

            it("Single line of text: new Node(\"p\", 2, \"\nLorem ipsum\") should return \"\\t\\tp Lorem ipsum", function() {
                node = new Node("p", 2, "Lorem ipsum");
                expect(node.toString()).to.equal("\t\tp Lorem ipsum");
            });

            it("Multi line of text: new Node(\"p\", 2, \"\\nLorem ipsum\\nMid magnis\\nTristique mauris proin\") should return \"\\t\\tp.\\n\\t\\t\\tLorem ipsum\\n\\t\\t\\tMid magnis\\n\\t\\t\\tTristique mauris proin", function() {
                node = new Node("p", 2, "\nLorem ipsum\nMid magnis\nTristique mauris proin");
                expect(node.toString()).to.equal("\t\tp.\n\t\t\tLorem ipsum\n\t\t\tMid magnis\n\t\t\tTristique mauris proin");
            });
        });
    });
});
