export type NotifyOwnerInput = {
  title: string;
  content: string;
};

export async function notifyOwner(input: NotifyOwnerInput): Promise<boolean> {
  console.info(`[Notification disabled] ${input.title}: ${input.content}`);
  return false;
}
