shared abstract class NodeFilterResult(String name) of filterAccept | filterReject | filterSkip {}

shared object filterAccept extends NodeFilterResult("filterAccept") {}
shared object filterReject extends NodeFilterResult("filterReject") {}
shared object filterSkip extends NodeFilterResult("filterSkip") {}

// TODO test that this function will actally work
shared class NodeFilter(NodeFilterResult acceptNode(Node n)) {
	shared dynamic native;
	dynamic {
		native = \iObject();
		native.acceptNode = acceptNode;
	}
}