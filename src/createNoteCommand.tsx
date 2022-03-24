import { showToast, ToastStyle } from "@raycast/api";

import { CreateNoteForm } from "./components/CreateNoteForm";
import { VaultSelection } from "./components/VaultSelection";
import { parseVaults } from "./VaultUtils";

export default function Command() {
  const vaults = parseVaults();
  if (vaults.length > 1) {
    return <VaultSelection vaults={vaults} target={(path: string) => <CreateNoteForm vaultPath={path} />} />;
  } else if (vaults.length == 1) {
    return <CreateNoteForm vaultPath={vaults[0].path} />;
  } else {
    showToast(
      ToastStyle.Failure,
      "Path Error",
      "Something went wrong with your vault path. There are no paths to select from."
    );
  }
}