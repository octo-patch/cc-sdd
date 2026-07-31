import { describe, expect, it } from 'vitest';
import { agentDefinitions } from '../src/agents/registry';

describe('agent registry recommendations', () => {
  it('includes current MiniMax models for Claude Code and OpenCode variants', () => {
    const agents = [
      'claude-code',
      'claude-code-agent',
      'claude-code-skills',
      'opencode',
      'opencode-agent',
      'opencode-skills',
    ] as const;

    for (const agent of agents) {
      expect(agentDefinitions[agent].recommendedModels).toContain('MiniMax-M3');
      expect(agentDefinitions[agent].recommendedModels).toContain('MiniMax-M2.7');
    }
  });
});
