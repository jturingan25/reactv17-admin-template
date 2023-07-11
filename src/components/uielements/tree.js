import { Tree } from 'antd';
import AntTree from './styles/tree.style';
import WithDirection from '@tminds/lib/helpers/rtl';
const WDTrees = AntTree(Tree);
const Trees = WithDirection(WDTrees);

const TreeNode = Tree.TreeNode;

export default Trees;
export { TreeNode };
