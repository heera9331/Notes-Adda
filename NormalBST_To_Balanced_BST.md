
class Solution{
private:
    vector<int> BST;
    void dfs(Node* root){
        if(root == NULL) return;
        dfs(root->left);
        BST.push_back(root->data);
        dfs(root->right);
    }
    Node* build(int low,int high){
        if(low > high) return NULL;
        int mid = low + (high-low)/2;
        Node* parent = new Node(BST[mid]);
        parent->left = build(low,mid-1);
        parent->right = build(mid+1,high);
    }
public:
    Node* buildBalancedTree(Node* root){
        BST.resize(0);
        dfs(root);
        return build(0,BST.size()-1);
    }
};
