import { AgentDetailView } from '@/modules/agents/components/views/agent-detail-view';

export default async function AdminAgentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <AgentDetailView id={id} />;
}
