/**
 * Created by mats on 2015-10-07.
 */
/**
 * @author Mats Loock
 * @version 1.0.0
 */

"use strict";

var expect = require("chai").expect;
var fs = require("fs");
var htmlToJson = require("html-to-json");

describe("TreeView", function() {
    var TreeView;
    var treeView;

    describe("Type", function() {
        it("TreeView should be defined", function() {
            TreeView = require("./../src/TreeView");
        });
    });

    //describe("Constructor", function() {
    //    it("should have property nodes", function() {
    //        treeView = new TreeView();
    //        expect(treeView).to.have.property("nodes");
    //    });
    //});

    describe("Prototype", function() {
        describe("toString method", function() {
            it("should be defined as an own property", function() {
                expect(TreeView.prototype.hasOwnProperty("toString")).to.equal(true);
            });

            it("should return \"doctype html\\nhtml\\n\\thead\\n\\t\\ttitle Titel\\n\\tbody\\n\\t\\tp Paragraph tag\\n\"", function(done) {
                var html = fs.readFileSync(__dirname + "/TreeView.test.1.html", "UTF-8");
                htmlToJson.parse(html, function(json) {
                    treeView = new TreeView(json[0].children[0]);
                    expect(treeView.toString()).to.equal("doctype html\nhtml\n\thead\n\t\ttitle Titel\n\tbody\n\t\tp Paragraph tag\n");
                    done();
                });
            });

            it("should return correct Jade-string for TreeView.test.2.html", function(done) {
                var html = fs.readFileSync(__dirname + "/TreeView.test.2.html", "UTF-8");
                htmlToJson.parse(html, function(json) {
                    treeView = new TreeView(json[0].children[0]);
                    var str = "doctype html\nhtml\n\thead\n\t\ttitle Detta är en titel\n\tbody\n\t\th1 Detta är en rubrik\n\t\tdiv\n\t\t\tul\n\t\t\t\tli Hem\n\t\t\t\tli Kontakt\n\t\t\t\tli Kontakt\n\t\t\t\tli Kontakt\n\t\t\t\tli Kontakt\n\t\tdiv\n\t\t\tp Detta är ett stycke\n\t\t\t\tspan Som innehåller ett element\n\t\t\th1 Detta är en rubrik\n\t\t\tp.\n\t\t\t\tDetta är ett stycke\n\t\t\t\tmed\n\t\t\t\tmånga\n\t\t\t\trader\n";

                    expect(treeView.toString()).to.equal(str);
                    console.log(treeView.toString());
                    done();
                });
            });
        });
    });
});
