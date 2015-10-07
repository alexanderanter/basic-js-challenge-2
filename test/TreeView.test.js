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
            TreeView = require("./../../../src/part-2/exam/TreeView");
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
        });
    });
});
