"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[898],{

/***/ 1898:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(__webpack_module__, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyMerkleWitness": function() { return /* binding */ MyMerkleWitness; },
/* harmony export */   "WhaleCoiner": function() { return /* binding */ WhaleCoiner; },
/* harmony export */   "int2str": function() { return /* binding */ int2str; },
/* harmony export */   "str2int": function() { return /* binding */ str2int; },
/* harmony export */   "treeHeight": function() { return /* binding */ treeHeight; },
/* harmony export */   "whaleTree": function() { return /* binding */ whaleTree; }
/* harmony export */ });
/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const whales = [
    { "n": "tomo1", "a": "B62qiVkf7fKpYyo1UMrHyYVaitGyYHogTuarN3f6gZsqoCatm1DEqXn" },
    { "n": "tomo2", "a": "B62qn4NJzttY3bCz7936z7YZYBAS68RXdRbLrkRFh2wNGyJ3PRVW8fx" },
    { "n": "berkeley-unknown", "a": "B62qmQsEHcsPUs5xdtHKjEmWqqhUPRSF2GNmdguqnNvpEZpKftPC69e" },
    { "n": "mina-1", "a": "B62qptmpH9PVe76ZEfS1NWVV27XjZJEJyr8mWZFjfohxppmS11DfKFG" },
    { "n": "CoinList", "a": "B62qmjZSQHakvWz7ZMkaaVW7ye1BpxdYABAMoiGk3u9bBaLmK5DJPkR" },
    { "n": "mina-3", "a": "B62qkNc4ZXoPyK8PkYt3rN6PuLVvCnojmkP2j5Vh3CqHUSJ8s5BbxAM" },
    { "n": "OKEX", "a": "B62qpWaQoQoPL5AGta7Hz2DgJ9CJonpunjzCGTdw8KiCCD1hX8fNHuR" },
    { "n": "mina-5", "a": "B62qq8sm8HemutQiT6VuDKNWKLAi1Tvz1jrnttVajpL8zdaXMq6M9gu" },
    { "n": "Kraken", "a": "B62qkRodi7nj6W1geB12UuW2XAx2yidWZCcDthJvkf9G4A6G5GFasVQ" },
    { "n": "Binance", "a": "B62qrRvo5wngd5WA1dgXkQpCdQMRDndusmjfWXWT1LgsSFFdBS9RCsV" },
    { "n": "burn", "a": "B62qiburnzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzmp7r7UN6X" },
    { "n": "btc-Binance-cold", "a": "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo" },
    { "n": "btc-Bitfinex-cold", "a": "bc1qgdjqv0av3q56jvd82tkdjpy7gdp9ut8tlqmgrpmv24sq90ecnvqqjwvw97" },
    { "n": "btc-unknown", "a": "1LQoWist8KkaUXSPKZHNvEyfrEkPHzSsCd" }
];
await snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .isReady */ .DK; // before new Field
const treeHeight = 8;
// creates the corresponding MerkleWitness class that is circuit-compatible
class MyMerkleWitness extends (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .MerkleWitness */ .Pj)(treeHeight) {
}
function whaleTree() {
    const Tree = new snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .MerkleTree */ .MV(8);
    let nextIdx = 0;
    for (const [i, whale] of whales.entries()) {
        if (whale.a.slice(0, 2) == 'B6') {
            Tree.setLeaf(BigInt(nextIdx), snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey.fromBase58 */ .nh.fromBase58(whale.a).toFields()));
            nextIdx++;
        }
    }
    return [Tree, Tree.getRoot()];
}
const [_, initialCommitment] = whaleTree(); // = Tree.getRoot();
function str2int(str) {
    return BigInt('0x' + str.split('').map(char => char.charCodeAt(0).toString(16)).join(''));
}
function int2str(n) {
    const hex = n.toString(16);
    let s = '';
    for (let idx = 0; idx < hex.length; idx += 2) {
        s += String.fromCharCode(parseInt(hex.slice(idx, idx + 2), 16));
    }
    return s;
}
/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */
class WhaleCoiner extends snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .SmartContract */ .C3 {
    constructor() {
        super(...arguments);
        this.num = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
        this.msg = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)(); // BigInt of ASCII to hex
        // a commitment is a cryptographic primitive that allows us to commit to data, with the ability to "reveal" it later
        this.commitment = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM)();
    }
    // SmartContract.init() is a new method on the base SmartContract that will be called only during the first deploy (not if you re-deploy later to upgrade the contract) 
    init() {
        super.init();
    }
    deploy(args) {
        super.deploy(args);
        this.setPermissions({
            ...snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Permissions["default"] */ .Pl["default"](),
            editState: snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Permissions.proofOrSignature */ .Pl.proofOrSignature(),
        });
        // unused: this.balance.addInPlace(UInt64.from(initialBalance));
        this.commitment.set(initialCommitment);
        // moved from init
        this.num.set((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(1));
        this.msg.set((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN)(str2int('init')));
    }
    update(newNum) {
        const curNum = this.num.get();
        this.num.assertEquals(curNum); // precondition that links this.num.get() to the actual on-chain state
        const newState = newNum.add(1);
        this.num.set(newState);
    }
    recommit(root) {
        const curRoot = this.commitment.get();
        this.commitment.assertEquals(curRoot);
        this.commitment.set(root);
    }
    // Keep in mind that all functions used inside your smart contract must operate on SnarkyJS compatible data types (e.g. Fields and other types built on top of Fields).
    // spray message on wall if you're whalish
    wallAsWhale(rootCopy, whalePub, path, sig, wallMsg) {
        // we fetch the on-chain commitment (root)
        const commitment = this.commitment.get();
        this.commitment.assertEquals(commitment);
        // Error: ("Error: assert_equal: 0 != 25321076411253627146932089654484565121081622867262989611537313761204357221798")
        // commitment.assertEquals(rootCopy);
        // but this OK
        this.commitment.assertEquals(rootCopy);
        // // we check that the account is within the committed Merkle Tree
        const leafHash = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Poseidon.hash */ .jm.hash(whalePub.toFields());
        path.calculateRoot(leafHash).assertEquals(rootCopy /*commitment*/);
        const msg = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .CircuitString.fromString */ ._G.fromString('Satoshi is a WhaleCoiner').toFields();
        sig.verify(whalePub, msg).assertTrue();
        //this.num.set(Field(num.toFields()[0]));
        this.msg.set(wallMsg); // str2int
    }
    wallfromUI(wallMsg) {
        // we fetch the on-chain commitment (root)
        let commitment = this.commitment.get();
        this.commitment.assertEquals(commitment);
        // // we check that the account is within the committed Merkle Tree
        // const leafHash = Poseidon.hash(whalePub.toFields());
        // path.calculateRoot(leafHash).assertEquals(commitment);
        const msg = snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .CircuitString.fromString */ ._G.fromString('Satoshi is a WhaleCoiner').toFields();
        // const sig = new Signature(r, s);
        // this fails on assertTrue: const sig = Signature.fromFields([r, s]);
        // also fails on assert: const sig = Signature.fromFields([s, r]);
        // //    Field(BigInt("11149866380985503299463982621713898158386384905365504586658985081080436971813")),
        // //    Field(BigInt("27805392407476107597780241785910086576642409128638979382253461373350709924352"))
        // // );
        // this works
        // const sig = Signature.fromJSON({
        //   r: '24756403745565155334343141240729212829194956404851084071603591710242651547325',
        //   s: '25284399962144351938259578951164638075292706477803146509961794774712565708371'
        // })
        // Signature constructor called with 1 arguments, but expected 2: const sig = new Signature([r, s]);
        // this works.. but may cause: Error: Can't evaluate prover code outside an as_prover block
        //const sig = Signature.fromJSON({r: r.toString(), s: s.toString()});
        // try interact even though assert fails - at least this deploys
        // const sig = Signature.fromFields([
        //    Field(BigInt("11149866380985503299463982621713898158386384905365504586658985081080436971813")),
        //    Field(BigInt("27805392407476107597780241785910086576642409128638979382253461373350709924352"))
        // ]);
        // passed in PublicKey object from UI missing .toGroup.
        // base58 string not provable. try field[]. array not provable either.
        // const whalePub = PublicKey.fromFields([whalePubIsOdd, whalePubX]); // reversed
        // const sig = new Signature(
        //   r,//Field(BigInt("24756403745565155334343141240729212829194956404851084071603591710242651547325")),
        //   s,//Scalar.fromJSON("25284399962144351938259578951164638075292706477803146509961794774712565708371")
        // );
        // sig.verify(whalePub, msg).assertTrue();
        //this.num.set(Field(num.toFields()[0]));
        this.msg.set(wallMsg); // str2int
    }
}
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], WhaleCoiner.prototype, "num", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], WhaleCoiner.prototype, "msg", void 0);
__decorate([
    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .state */ .SB)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN),
    __metadata("design:type", Object)
], WhaleCoiner.prototype, "commitment", void 0);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], WhaleCoiner.prototype, "update", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], WhaleCoiner.prototype, "recommit", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN, snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .PublicKey */ .nh, MyMerkleWitness, snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Signature */ .Pc, snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], WhaleCoiner.prototype, "wallAsWhale", null);
__decorate([
    snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .method */ .UD,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [snarkyjs__WEBPACK_IMPORTED_MODULE_0__/* .Field */ .gN]),
    __metadata("design:returntype", void 0)
], WhaleCoiner.prototype, "wallfromUI", null);
//# sourceMappingURL=WhaleCoiner.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);