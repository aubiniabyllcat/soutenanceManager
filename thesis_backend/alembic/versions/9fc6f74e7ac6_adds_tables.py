"""adds tables

Revision ID: 9fc6f74e7ac6
Revises: 2af983e6706d
Create Date: 2024-06-11 22:16:13.221382

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9fc6f74e7ac6'
down_revision = '2af983e6706d'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('jury_rapporteur_id_fkey', 'jury', type_='foreignkey')
    op.drop_constraint('jury_president_id_fkey', 'jury', type_='foreignkey')
    op.drop_constraint('jury_examinateur_id_fkey', 'jury', type_='foreignkey')
    op.create_foreign_key(None, 'jury', 'enseignant', ['rapporteur_id'], ['id'], source_schema='public', ondelete='CASCADE')
    op.create_foreign_key(None, 'jury', 'enseignant', ['president_id'], ['id'], source_schema='public', ondelete='CASCADE')
    op.create_foreign_key(None, 'jury', 'enseignant', ['examinateur_id'], ['id'], source_schema='public', ondelete='CASCADE')
    op.add_column('utilisateur', sa.Column('is_admin', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('utilisateur', 'is_admin')
    op.drop_constraint(None, 'jury', schema='public', type_='foreignkey')
    op.drop_constraint(None, 'jury', schema='public', type_='foreignkey')
    op.drop_constraint(None, 'jury', schema='public', type_='foreignkey')
    op.create_foreign_key('jury_examinateur_id_fkey', 'jury', 'enseignant', ['examinateur_id'], ['id'], ondelete='CASCADE')
    op.create_foreign_key('jury_president_id_fkey', 'jury', 'enseignant', ['president_id'], ['id'], ondelete='CASCADE')
    op.create_foreign_key('jury_rapporteur_id_fkey', 'jury', 'enseignant', ['rapporteur_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###